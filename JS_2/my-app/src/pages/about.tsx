import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>Muhammad Fahreza Rohmansyah</p>
            <p>2341720151</p>
            <p>Mahasiswa D4 Pengembangan Web</p>           
        </div>
    )
}