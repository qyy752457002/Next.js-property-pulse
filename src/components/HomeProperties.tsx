import React from "react";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import { fetchProperties } from "@/utils/requests";

const HomeProperties = async () => {

  const properties = await fetchProperties(); 
    
    /*
        从一个名为 `properties` 的数组中随机选择三个元素，并将它们存储在 `recentProperties` 变量中。

        1. `const recentProperties = properties`: 

                这行代码声明了一个名为 `recentProperties` 的常量，并将其赋值为 `properties` 变量的值。
                
                这里 `properties` 是一个数组，包含了一系列的属性。

        2. `.sort(() => Math.random() - Math.random())`: 

                这一行是对数组进行排序的部分。这里使用了一个随机排序的技巧。
                
                `sort` 函数接受一个比较函数作为参数，该函数返回一个负数、零或正数，表示第一个参数应该排在前面、相等、还是排在后面。
                
                在这个比较函数中，使用 `Math.random()` 生成随机数，使得排序时元素的顺序是随机的。

        3. `.slice(0, 3)`: 

                这一部分使用 `slice` 方法，它从已排序的数组中截取前三个元素，这样就得到了随机排序的前三个属性。

                综合起来，这段代码的作用就是从 `properties` 数组中随机选择三个属性，并将它们存储在 `recentProperties` 变量中。
    */

  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties === 0 ? (
              <p>No Properties Found</p>
            ) : (
              recentProperties.map((property: any) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
