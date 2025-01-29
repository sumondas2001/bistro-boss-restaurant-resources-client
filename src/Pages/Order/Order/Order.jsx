import { Helmet } from "react-helmet";
import Cover from "../../../Shared/Cover/Cover";
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import UseMenu from "../../../hooks/UseMenu";

import OrderTab from "../OrderTab/OrderTab";


const Order = () => {


     const [tabIndex, setTabIndex] = useState(0);
     const [menu] = UseMenu();
     const category = menu.map(item => item.category);
     const uniqueCategories = [...new Set(category)];

     const offered = menu.filter(item => item.category === 'offered');
     const drinks = menu.filter(item => item.category === 'drinks');
     const popular = menu.filter(item => item.category === 'popular');
     const pizza = menu.filter(item => item.category === 'pizza');
     const dessert = menu.filter(item => item.category === 'dessert');
     const soup = menu.filter(item => item.category === 'soup');
     const salad = menu.filter(item => item.category === 'salad');

     return (
          <div>
               <Helmet>
                    <title>Order</title>
               </Helmet>
               <Cover img={orderCoverImg} title={'Order'} description={'Would you like to try a dish?'} />

               <div className="mt-10 mb-10">
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                         {/* Tabs List */}
                         <TabList className="text-center">


                              {uniqueCategories.map((category, index) => (
                                   <Tab key={index}>{category}</Tab>
                              ))}
                         </TabList>

                         {/* Tab Panels */}
                         <TabPanel className={'mt-10'}>

                              <OrderTab item={offered} />
                         </TabPanel>

                         <TabPanel className={'mt-10'}>

                              <OrderTab item={drinks} />
                         </TabPanel>

                         <TabPanel className={'mt-10'}>

                              <OrderTab item={popular} />
                         </TabPanel>

                         <TabPanel className={'mt-10'}>

                              <OrderTab item={pizza} />

                         </TabPanel>

                         <TabPanel className={'mt-10'}>

                              <OrderTab item={dessert} />
                         </TabPanel>

                         <TabPanel className={'mt-10'}>

                              <OrderTab item={soup} />
                         </TabPanel>

                         <TabPanel className={'mt-10'}>

                              <OrderTab item={salad} />
                         </TabPanel>
                    </Tabs>



               </div>
          </div>
     );
};

export default Order;
