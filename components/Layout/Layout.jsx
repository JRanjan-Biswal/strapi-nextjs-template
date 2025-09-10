import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Layout({ children }) {

  let headerData = null;
  let footerData = null;


  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

// {
//   populate: {
//     header: {
//       populate: {
//         logo: {
//           fields: ["url", "alternativeText", "mime"]
//         },
//         navigation: {
//           populate: true
//         }
//       }
//     },
//     footer: {
//       populate: {
//         footer_navigation: {
//           populate: true
//         }
//       }
//     }
//   },
// }
