import { useEffect, useState } from "react"

const Profile = () => {
    const [profiledata, setprofiledata] = useState({})

    useEffect(() => {
        const fetchprofile = async () => {
            try {
                const response = await fetch("http://localhost:8080/auth/profile", )
            } catch (error) {

            }
        }
        fetchprofile()
    }, [])

    return (
        <div>

        </div>
    )
}

export default Profile