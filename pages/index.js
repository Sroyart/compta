import Head from "next/head"
import { useContext } from "react/cjs/react.development"
import tableContext from "../context/tableContext"

export default function Test() {
  const { incomes } = useContext(tableContext)
  var resultPositive = 0
  var resultNegative = 0
  var theSwitch = false

  const getTotal = (bool) => {
    bool
      ? incomes.map((e) =>
          e.income > 0
            ? (resultPositive = resultPositive + e.income)
            : resultPositive
        )
      : incomes.map((e) =>
          e.income < 0
            ? (resultNegative = resultNegative + e.income)
            : resultNegative
        )

    return bool ? resultPositive : resultNegative
  }

  const getResult = () => {
    return resultPositive + resultNegative
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Dashboard</h1>
        <table>
          <thead>
            <tr>
              <th>income</th>
              <th>outcome</th>
            </tr>
          </thead>
          <tbody>
            {incomes?.map((e) => (
              <tr key={e.id} className={theSwitch ? "theShade" : "theWhite"}>
                {(theSwitch = !theSwitch)}
                {e.income > 0 ? (
                  <td className="right">
                    <p className="green">+{e.income}$</p>
                    {e.text}
                  </td>
                ) : (
                  <td className="void"></td>
                )}

                {e.income < 0 ? (
                  <td>
                    <p className="red">{e.income}$</p>
                    {e.text}
                  </td>
                ) : (
                  <td className="void"></td>
                )}
              </tr>
            ))}
            <tr>
              <td>Total : {getTotal(true)}</td>
              <td>Total : {getTotal(false)}</td>
            </tr>
            <tr>
              <td>Result : {getResult()}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}
