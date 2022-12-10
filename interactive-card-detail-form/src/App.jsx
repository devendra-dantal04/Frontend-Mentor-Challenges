import React from "react";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import FormSection from "./components/FormSection";
import FormProvider from "./context/FormProvider";

function App() {

  return (
    <>
    <FormProvider>
      <main>
        <div className="bg"></div>
        <div className="main-container">
          <div className="card-section">
            <CardFront />
            <CardBack />
          </div>
          <div className="form-section">
            <FormSection />
          </div>
        </div>
      </main>
    </FormProvider>
    </>
  )
}

export default App
