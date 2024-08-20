import { useState } from 'react';
import shopImg from '../../assets/bannerCocacola2.png'
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import ShopTab from '../ShopTab/ShopTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Shop = () => {
    const categories = ['cocacola','sprite','fanta','kinley']
    const {category} = useParams();
    const initalIndex = categories.indexOf(category)
    const [tabIndex,setTabIndex]= useState(initalIndex);
    const [menu] =useMenu();


    const CocaColaItems = menu.filter(item => item.category === 'Coca-Cola')
    const SpriteItems = menu.filter(item => item.category === 'Sprite')
    const FantaItems = menu.filter(item => item.category === 'Fanta')
    const KinleyItems = menu.filter(item => item.category === 'Kinley')
    return(
        <div>
            <Helmet>
                <title>Coco-cola | Shop</title>
            </Helmet>
            <Cover img={shopImg} title='Our shop'></Cover>

            <Tabs className='text-center mb-20' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Coca-Cola</Tab>
                    <Tab>Sprite</Tab>
                    <Tab>Fanta</Tab>
                    <Tab>Kinley</Tab>
                </TabList>
                <TabPanel>
                    <ShopTab items={CocaColaItems}></ShopTab>
                </TabPanel>
                <TabPanel>
                <ShopTab items={SpriteItems}></ShopTab>
                </TabPanel>
                <TabPanel>
                <ShopTab items={FantaItems}></ShopTab>
                </TabPanel>
                <TabPanel>
                <ShopTab items={KinleyItems}></ShopTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;