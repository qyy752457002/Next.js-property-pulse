import HomeProperties from '@/components/HomeProperties';
import Hero from '../components/Hero';
import InfoBoxes from '@/components/infoBoxes';

const HomePage = () => {

    return (
        // <div>
        //     <h1 className="text-3xl">Welcome</h1>
        //     <Link href='/properties'>Show Properties</Link>
        // </div> 
        <>
            <Hero />
            <InfoBoxes />
            <HomeProperties />
        </>
    );
};

export default HomePage;