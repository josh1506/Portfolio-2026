import BrowseUserList from "../components/BrowseUserList"

const BrowserPage = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="absolute top-0 h-18 w-full bg-linear-to-b from-black/70 to-transparent"></div>
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-white text-5xl">Who's watching?</h1>
            <BrowseUserList />
            <div className="border border-zinc-500 px-8 py-1 text-zinc-500 hover:border-white hover:text-white transition-colors">
                <span className="tracking-widest cursor-default">Portfolio 2026</span>
            </div>
        </div>
        </div>
    )
}

export default BrowserPage
