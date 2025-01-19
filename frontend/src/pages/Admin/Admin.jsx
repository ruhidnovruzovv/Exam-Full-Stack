import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteProduct, fethProducts, postProduct } from "../../redux/features/productSlice";
import './Admin.css'
import { useFormik } from 'formik';
import { productSchema } from "../../Schema/productSchema";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Admin = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [show, setShow] = useState(false);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    dispatch(fethProducts());
  }, [dispatch]);

  const togleBtn = () => {
    setShow(!show);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      image: '',
      price: parseFloat(''),
      description: ''
    },

    onSubmit: (values)=>{
      dispatch(postProduct(values))
      formik.resetForm()
      setShow(!show)
    },
    validationSchema: productSchema,

  })

  return (
    <section id="admin" style={{ paddingTop: "100px" }}>
      <div className="container">
        <button
          style={{
            padding: "10px 20px",
            color: "white",
            background: "green",
            border: "none",
            cursor: "pointer",
            marginBottom: "20px",
          }}
          onClick={() => togleBtn()}
        >
          Create
        </button>

        {show && (
          <div className="overlay">
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="name">Name</label>
              <br />
              {formik.errors.name && <span style={{color: 'red', fontSize: '14px'}}>{formik.errors.name}</span>}
              <input type="text" name="name" placeholder="Name"  onChange={formik.handleChange} value={formik.values.name}/>
              <label htmlFor="Image">Image</label>
              <br />
              {formik.errors.image && <span style={{color: 'red', fontSize: '14px'}}>{formik.errors.image}</span>}
              <input type="url" name="image" placeholder="Image"  onChange={formik.handleChange} value={formik.values.image}/>
              <label htmlFor="price">Price</label>
              <br />
              {formik.errors.price && <span style={{color: 'red', fontSize: '14px'}}>{formik.errors.price}</span>}
              <input type="number" name="price" placeholder="Price"  onChange={formik.handleChange} value={formik.values.price}/>
              <label htmlFor="description">Description</label>
              <br />
              {formik.errors.description && <span style={{color: 'red', fontSize: '14px'}}>{formik.errors.description}</span>}
              <input type="text" name="description" placeholder="Description"  onChange={formik.handleChange} value={formik.values.description}/>

              <div className="form-btns">
                <button onClick={()=>togleBtn()}>Cancel</button>
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        )}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Image</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((item) => (
                <StyledTableRow key={item._id}>
                  <StyledTableCell align="center">
                    <img src={item.image} alt="" height={80} />
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.name}</StyledTableCell>
                  <StyledTableCell align="center">{item.price}</StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      style={{
                        padding: "5px 10px",
                        color: "white",
                        background: "red",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDeleteProduct(item._id)}
                    >
                      Delete
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default Admin;
