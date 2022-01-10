import logoImage from '../public/images/demonlabslogo.png'

import Image from 'next/image'

const Logo = () => {
    return (
        <div>
            <Image src={logoImage}/>
        </div>
    )
}

export default Logo
