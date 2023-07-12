import prismadb from '@/lib/prismadb';
import { BillboardClient } from './components/client';
import { format } from 'date-fns';

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  // Fetch all billboards
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  const formattedBillboards = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));
  console.log(formattedBillboards);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;
