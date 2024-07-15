import UsersTable from './UsersTable';
import Breadcrumb from '../../layout/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';

const Users = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Users' />
      <div className='flex flex-col gap-10'>
        <UsersTable />
      </div>
    </DefaultLayout>
  );
};

export default Users;
