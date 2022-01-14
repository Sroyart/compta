import React from "react"
import { useFormik } from "formik"
import { useContext } from "react/cjs/react.development"
import tableContext from "../context/tableContext"
import { v4 as uuid } from "uuid"

const Table = () => {
  const { incomes } = useContext(tableContext)

  const formik = useFormik({
    initialValues: {
      id: 0,
      income: 0,
      text: "",
    },

    onSubmit: (values, { resetForm }) => {
      values.id = uuid()
      values.income != 0 ? incomes.push(values) : null
      resetForm()
    },
  })

  return (
    <div>
      <h1>Add entry</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="text"
          type="text"
          name="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.text}
        />
        <input
          id="income"
          type="number"
          name="income"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.income}
        />
        <button type="submit">new</button>
      </form>
    </div>
  )
}

export default Table
