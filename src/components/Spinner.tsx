'use client';
import ClipLoader from "react-spinners/ClipLoader";

interface LoadingPageProps {
    loading: boolean;  // Define the loading prop
}

const override = {
    display: "block",
    margin: '100px auto',
};

// 定义 Spinner 组件，类型为React.FC 泛型函数，其中传入的props是 LoadingPageProps 类型
const Spinner: React.FC<LoadingPageProps> = ({ loading }) => {
    return (
        <ClipLoader
            color='#3b82f6'
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label='Loading Spinner'
        />
    );
};
export default Spinner;