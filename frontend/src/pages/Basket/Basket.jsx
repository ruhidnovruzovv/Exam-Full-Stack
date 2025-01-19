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
import { removeFromBasket } from "../../redux/features/basketSlice";

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

const Basket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);

  const totalBasketPrice = basket.reduce((sum, item)=> sum + (item.price*item.count), 0)

  const deleteItemBasket = (id)=>{
    dispatch(removeFromBasket(id))
  }

  return (
    <section id="basket" style={{ paddingTop: "100px" }}>
      <div className="container">
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
              {basket.map((item) => (
                <StyledTableRow key={item._id}>
                  <StyledTableCell align="center">
                    <img src={item.image} alt="" height={80} />
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.name}</StyledTableCell>
                  <StyledTableCell align="center">{(item.price * item.count)}</StyledTableCell>
                  <StyledTableCell align="center">
                    <button style={{padding: '5px 10px', color: 'white', background:'red', border: 'none', cursor: 'pointer'}} onClick={()=> deleteItemBasket(item._id)}>Delete</button>
                  </StyledTableCell>
                </StyledTableRow>
                
              ))}
            </TableBody>
          </Table>
          <div className="total" style={{padding: '20px 10px', fontSize: '20px', fontWeight: 'bold'}}>Total Basket Price: ${totalBasketPrice}</div>

        </TableContainer>
      </div>
    </section>
  );
};

export default Basket;
