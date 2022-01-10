import logoImage from '../public/images/demonlabslogotransparent.png'

import Image from 'next/image'

const Logo = () => {
    return (
        <div>
            <Image src={logoImage}/>
        </div>
    )
}

export default Logo
