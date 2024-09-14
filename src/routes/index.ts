import ControlPanel from "../pages/ControlPanel";
import SharedCPU from "../pages/SharedCPU";
import DedicatedCPU from "../pages/DedicatedCPU";
import BareMetal from "../pages/BareMetal";
import CloudGPU from "../pages/CloudGPU";
import Proxy from "../pages/Proxy";
import UserAid from "../pages/UserAid";
import Deposit from "../pages/Deposit";

const coreRoutes = [
  {
    path: '/',
    title: 'Control Panel',
    component: ControlPanel,
  },
  {
    path: '/products/cloudcompute/sharedcpu',
    title: 'SharedCPU',
    component: SharedCPU,
  },
  {
    path: '/products/cloudcompute/dedicatedcpu',
    title: 'DedicatedCPU',
    component: DedicatedCPU,
  },
  {
    path: '/products/cloudcompute/baremetal',
    title: 'Bare Metal',
    component: BareMetal,
  },
  {
    path: '/products/cloudgpu',
    title: 'Cloud GPU',
    component: CloudGPU,
  },
  {
    path: '/products/proxy',
    title: 'Proxy',
    component: Proxy,
  },
  {
    path: '/user-aid',
    title: 'User Aid',
    component: UserAid,
  },
  {
    path: '/deposit/:id',
    title: 'Deposit',
    component: Deposit,
  },
];

const routes = [...coreRoutes];
export default routes;
