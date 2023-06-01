/* eslint-disable no-unused-vars */
import { NavBar } from '@/scenes/NavBar';
import React from 'react';

enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}
export const App = () => {
  const [selectedPage, setSelectedPage] = React.useState<SelectedPage>(
    SelectedPage.Home,
  );
  return (
    <div className="app bg-gray-20">
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
};
