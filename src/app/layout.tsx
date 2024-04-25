import { ReactNode } from 'react';
import '@/assets/styles/globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// 导出metadata常量，其中包含title、description和keywords三个属性
export const metadata = {
    // 页标题
    title: 'PropertyPulse | Find the Perfect Rental',
    // 页描述
    description: 'Find your dream rental property',
    // 页关键字
    keywords: 'rental, find rentals, find properties',
};

/*
    这定义了一个名为 MainLayoutTypeProps 的类型别名，指定了组件所期望的名为 children，类型为 ReactNode 的 props。

    const MainLayout: React.FC<MainLayoutTypeProps> = (props) => {
        ... 
    };
*/

// 使用 type 定义类型
type MainLayoutTypeProps = {
    children: ReactNode;
};

/*
    这定义了一个名为 MainLayoutInterfaceProps 的接口，与类型别名具有相同的目的。
    它指定了组件所期望的名为 children，类型为 ReactNode 的 props。

    const MainLayout: React.FC<MainLayoutInterfaceProps> = (props) => {
        ... 
    };
*/

// 使用 interface 定义类型
interface MainLayoutInterfaceProps {
    children: ReactNode;
}

/*
    这定义了一个名为 MainLayoutClassProps 的类，它期望一个名为 children，类型为 ReactNode 的 props。
    然而，在 React 中使用类来定义 props 并不是一种常见的做法。
    通常情况下，props 是使用类型别名或接口来定义的。

    const MainLayout: React.FC<MainLayoutClassProps> = (props) => {
        ... 
    };
*/

// 使用 class 定义类型
class MainLayoutClassProps {
    children: ReactNode;

    constructor(children: ReactNode) {
        this.children = children;
    }
}

// 定义 MainLayout 组件，类型为React.FC 泛型函数，其中传入的props类型 MainLayoutTypeProps 类型
const MainLayout: React.FC<MainLayoutTypeProps> = (props) => {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                {/* <div>Header</div> */}
                <main>{props.children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default MainLayout;