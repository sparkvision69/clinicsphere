const Header = () => {
    const navitems = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Services",
            link: "/services"
        },
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Contect",
            link: "/contect"
        }
    ]
    return (
        <div>
            <div>
                ClinicsShere
            </div>
            <div>
                {navitems.map((item, index) => (
                    <div key={index} className="">
                        {item.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header