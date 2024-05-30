import Profile from '@/components/Profile';
import paises from '../../paises.json';
import NavBar from '@/components/NavBar';

export default () => {
  return (
    <div>
      <div>
        <Profile />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

