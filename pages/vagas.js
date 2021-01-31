import Link from 'next/link';

function Vagas() {
    return (
        <div>
            <h1>Vagas</h1>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/preco">
                <a>Preco</a>
            </Link>
            <Link href="/vagas">
                <a>Vagas</a>
            </Link>
            <Link href="/conta">
                <a>Conta</a>
            </Link>
        </div>
    )
};

export default Vagas;