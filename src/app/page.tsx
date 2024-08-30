export const revalidate = 86400;

import { CustomTitle } from "@/components/CustomTitle";
import { ConverterForm } from "@/components/ConverterForm";
import { getCurrencyList } from "@/api";

import styles from "./Home.module.scss";

export default async function Home() {
  let currencyList;

  try {
    const resp = await getCurrencyList();

    currencyList = Object.entries(resp.data.rates).map(([currencyName]) => ({
      value: currencyName,
      label: currencyName,
    }));
  } catch (error) {
    console.log(`Get data error: ${error}`);

    return (
      <main className={styles.root}>
        <CustomTitle tagName="h1">Crypto Converter</CustomTitle>
        <CustomTitle tagName="h6" className={styles.respError}>
          Data retrieval error. Please try reloading the page or come back
          later.
        </CustomTitle>
      </main>
    );
  }

  return (
    <main className={styles.root}>
      <CustomTitle tagName="h1">Crypto Converter</CustomTitle>
      <ConverterForm currencyList={currencyList} />
    </main>
  );
}
