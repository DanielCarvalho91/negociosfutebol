import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link href="/vagas">
                <a>Vagas</a>
            </Link>
            <Link href="/conta">
                <a>Conta</a>
            </Link>
        </div>
    )
};

export default Home;