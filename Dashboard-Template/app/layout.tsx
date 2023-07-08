import { ReduxProvider } from '@/redux/provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import Modals from './components/modal/modals';

export const metadata = {
  title: 'Student Manager Application',
  description:
    'Created in order to provide best solutions to student management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Modals />
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
