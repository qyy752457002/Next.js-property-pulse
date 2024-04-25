interface ButtonInfo {
    link: string; 
    text: string;
    backgroundColor: string;
}

interface InfoBoxProps {
    heading: string;
    backgroundColor?: string;
    textColor?: string;
    buttonInfo: ButtonInfo;
    children: React.ReactNode;
}

// React.FC是泛型函数组件，用于定义函数组件的类型，其中传入的props是InfoBoxProps类型。
const InfoBox: React.FC<InfoBoxProps> = ({heading, backgroundColor = "bg-gray-100", textColor = "text-gray-800", buttonInfo, children}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{ heading }</h2>
      <p className= {`${textColor} mt-2 mb-4`}>
        { children }
      </p>
      <a
        href= { buttonInfo.link }
        className= {`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:opacity-80`}
      >
        { buttonInfo.text }
      </a>
    </div>
  );
};

export default InfoBox;
