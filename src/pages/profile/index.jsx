import { Tabs } from 'antd';
import Bookings from './Bookings';
import TheatreList from '../partner/TheatreList';


const Profile = () => {
  // const onChange = (key) => {
  //     console.log(key);
  //   };
  const items = [
    {
      key: '1',
      label: 'Theatres',
      children: <TheatreList/>,
    },
    {
      key: '2',
      label: 'Bookings',
      children: <Bookings/>,
    },
    // {
    //   key: '3',
    //   label: 'Tab 3',
    //   children: 'Content of Tab Pane 3',
    // },
  ];

  return (
      <>
      <h1>User Profile Page</h1>
          <Tabs defaultActiveKey="2" items={items} />
      </>
  )
}
export default Profile;