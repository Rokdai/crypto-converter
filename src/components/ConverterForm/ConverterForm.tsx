"use client";

import { CustomInput } from "../FormFields/CustomInput";
import { SingleValue } from "react-select";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { getCurrencyRates } from "@/api";
import { CustomSelect } from "../FormFields/CustomSelect";
import { ISelectOption } from "@/types/select";
import { toast } from "react-toastify";

import styles from "./ConverterForm.module.scss";
import { Skeleton } from "../Skeleton";

interface IPrors {
  currencyList?: ISelectOption[];
}

export const ConverterForm: FC<IPrors> = ({ currencyList }) => {
  const [baseCurrency, setBaseCurrency] = useState<ISelectOption | null>(null);
  const [quotedCurrency, setQuotedCurrency] = useState<ISelectOption | null>(
    null
  );
  const [baseCurrencyValue, setBaseCurrencyValue] = useState<string | null>(
    null
  );
  const [quotedCurrencyValue, setQuotedCurrencyValue] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const onBaseCurrencyChange = (value: SingleValue<ISelectOption>) => {
    if (value) {
      setBaseCurrency(value);
    }
  };

  const onQuotedCurrencyChange = (value: SingleValue<ISelectOption>) => {
    if (value) {
      setQuotedCurrency(value);
    }
  };

  const onBaseCurrencyValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBaseCurrencyValue(e.target.value);
  };

  useEffect(() => {
    if (
      baseCurrency &&
      quotedCurrency &&
      baseCurrencyValue &&
      /^-?\d+(\.\d+)?$/.test(baseCurrencyValue)
    ) {
      (async () => {
        setIsLoading(true);

        try {
          const res = await getCurrencyRates(baseCurrency.value);

          setQuotedCurrencyValue(
            Number(baseCurrencyValue) !== 1
              ? (
                  Number(baseCurrencyValue) /
                  res.data.rates[quotedCurrency.value]
                ).toFixed(3)
              : res.data.rates[quotedCurrency.value].toFixed(2)
          );
        } catch (error) {
          console.log(`Get data error: ${error}`);

          toast.error(
            "It was not possible to get an up-to-date course.Please try reloading the page or come back later."
          );
        }

        setIsLoading(false);
      })();
    }
  }, [baseCurrencyValue, baseCurrency, quotedCurrency]);

  return (
    <form className={styles.root}>
      <div className={styles.wrapper}>
        <CustomSelect
          id="baseCurrency"
          value={baseCurrency}
          options={currencyList}
          onChange={onBaseCurrencyChange}
        />
        <CustomInput
          id="baseCurrencyInput"
          type="number"
          placeholder="Enter the value"
          value={baseCurrencyValue || ""}
          onChage={onBaseCurrencyValueChange}
        />
        =
        <CustomSelect
          id="quotedCurrency"
          value={quotedCurrency}
          options={currencyList}
          onChange={onQuotedCurrencyChange}
        />
        {!isLoading && quotedCurrencyValue && (
          <span>{quotedCurrencyValue}</span>
        )}
        {isLoading && <Skeleton className={styles.skeleton} />}
      </div>
    </form>
  );
};
