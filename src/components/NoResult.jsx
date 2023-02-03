import noresult from "../assets/images/no.png"

const NoResult = () => {
    return (
        <div className="absolute w-96 h-96 top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-3xl uppercase text-center mb-12 ">No result found</h1>
            <img src={noresult} alt="no result"/>
            <a href="https://www.flaticon.com/free-icons/page-not-found" title="page not found icons">(Page not found icons created by Freepik - Flaticon)</a>
        </div>
    )
}

export default NoResult