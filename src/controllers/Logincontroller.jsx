import { useFormik } from "formik";
import { schema } from "../schema";
import LoginView from "../views/LoginView";
import { useNavigate } from "react-router-dom";

const Logincontroller = () => {
  const navigate = useNavigate();
  //formik in bütün özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    // formda tutlacak verilerin ilk değerleri
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    //validasyon şeması
    //inputtaki veriler tanımladığımız şemadaki koşullara uygun mı diye kontrol eder. eğer geçerli değilse  error state i hataları ekler
    validationSchema: schema,
    // form gönderilince çalışacak olan fonksiyon
    //otomaatik olarak sayfa yenilemeyi engeller
    //1.parametre olarak formadaki verillerri alır
    //2.parametre olarak formdaki çalışacak action ları alır

    onSubmit: (values, actions) => {
      navigate("/home");
    },
  });
  return <LoginView formik={formik} />;
};

export default Logincontroller;
