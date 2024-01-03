import { INDEX_Welcome_D } from "@/components/org/welcome/desktop/INDEX_Welcome_D"
import { trpc } from '../../../utils/trpc';

export default function INDEX_Welcome_D_Page() {
  const test = trpc.business.getOne.useQuery({ id: '656f6c3bef3eff0e808caf8f' });
  console.log(test.data)
  if (!test.data) {
    return <div>Loading...</div>;
  }
  else {
    return (
      <>
        <INDEX_Welcome_D />
      </>
    )
  }
}
