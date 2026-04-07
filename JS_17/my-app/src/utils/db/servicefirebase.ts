import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  Firestore,
  doc,
  query,
  where,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

export type OAuthUserData = {
  email: string;
  fullname: string;
  image?: string;
  type: string; // e.g. "google" | "github"
  role?: string;
};

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
    const snapshot = await getDocs(collection(db, collectionName));
    const data = snapshot.docs.map((doc) => ({ 
        id: doc.id,
         ...doc.data(),
    }));
    return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(db, collectionName, id));
    const data = snapshot.data();
    return data;
}

export async function signIn( email: string ) {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    if (data) {
        return data[0];
    } else {
        return null;
    }
}

export async function signUp(
    userData: {
        email: string;
        password: string;
        fullname: string;
        role?: string;
    },
    callback : Function,
) {
    const q =query(
        collection(db, "users"),
        where("email", "==", userData.email)
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    if (data.length > 0) {
        callback({
            status: "error",
            message: "User already exists",
        });
    }else {
        userData.password = await bcrypt.hash(userData.password, 10);
        userData.role = "member";
        await addDoc(collection(db, "users"), userData)
            .then(() => {
                callback({
                status: "success",
                message: "User registered successfully",
                });
            })
            .catch((error) => {
                callback({
                status: "error",
                message: error.message,
                });
            });
    }
}

export async function upsertOAuthUser(userData: OAuthUserData) {
  try {
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email),
    );

    const querySnapshot = await getDocs(q);
    const data: any[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (data.length > 0) {
      userData.role = data[0].role ?? "member";
      await updateDoc(doc(db, "users", data[0].id), userData);
      return {
        status: true,
        message: "User updated and logged in With google",
        data: { id: data[0].id, ...userData },
      };
    } else {
      userData.role = "member";
      const ref = await addDoc(collection(db, "users"), userData);
      return {
        status: true,
        message: "User registered and logged in With google",
        data: { id: ref.id, ...userData },
      };
    }
  } catch (error: any) {
    return {
      status: false,
      message: "Failed to register user With google",
    };
  }
}

// Backward-compatible wrapper used by existing auth code
export async function signInWithGoogle(userData: any, callback: any) {
  const result = await upsertOAuthUser(userData);
  callback(result);
}