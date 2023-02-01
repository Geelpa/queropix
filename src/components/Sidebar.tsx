
export const Sidebar = () => {
    return (
        <div className='bg-green-500 w-1/6 h-screen text-xl  mr-2 absolute opacity-20'>
            <header className="h-16 w-full mb-6 flex column ">
                <img src="https://cdn.livepix.gg/profile/avatars/4b7e37ba-15f5-41d7-9127-692a4e5a1262.png"
                    alt="Imagem de perfil"
                    className="bg-black rounded-full h-full" />
                <span className="font-semibold h-full text-2xl  text-center">Geelpa</span>
            </header>
            <main className="w-full border-slate-900">
                <ul className="tet-left m-6 bg-slate-300">
                    <li className="p-2 
                    active: font-semibold bg-white w-full rounded-lg">Dashboard</li>
                    <li className="p-2  ">Carteira</li>
                    <li className="p-2  ">Widgets</li>
                    <li className="p-2  ">Configurações</li>
                    <li className="p-2  ">Perfil</li>
                    <li className="p-2  ">Ajuda</li>
                    <li className="p-2  ">Sair</li>
                </ul>
            </main>
        </div>
    )
}