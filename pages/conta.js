import Link from 'next/link';

function Conta() {
    return (
        <div>
            <h1>Conta</h1>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/preco.js">
                <a>Preços</a>
            </Link>
            <Link href="/vagas">
                <a>Vagas</a>
            </Link>
        </div>
    )
};

export default Conta;