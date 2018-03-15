const style = {
  commentBox: {
    width:'80%',
    height:'90vh',
    textAlign:"center",
    margin:'0 auto',
    fontFamily:'Helvetica, sans-serif'
  },
  title: {
    textAlign:'center',
    textTransform:'uppercase'
  },
  commentList: {
    border:'1px solid #f1f1f1',
    height:"90vh",
    padding:'0 12px',
    
    overflow:'scroll'
  },
  comment: {
    backgroundColor:'#fafafa',
    display:"inline-block",
    width:"20%",
    margin:'10px',
    padding:'3px 10px',
    fontSize:'.85rem'
  },
  commentForm: {
    margin:'10px',
    display:'flex',
    flexFlow:'row wrap',
    justifyContent:'space-between'
  },
  commentFormAuthor: {
    minWidth:'150px',
    margin:'3px',
    padding:'0 10px',
    borderRadius:'3px',
    height:'40px',
    flex:'2'
  },
  commentFormText: {
    flex:'4',
    minWidth:'400px',
    margin:'3px',
    padding:'0 10px',
    height:'40px',
    borderRadius:'3px'
  },
  commentFormPost: {
    minWidth:'75px',
    flex:'1',
    height:'40px',
    margin:'5px 3px',
    fontSize:'1rem',
    backgroundColor:'#A3CDFD',
    borderRadius:'3px',
    color:'#fff',
    textTransform:'uppercase',
    letterSpacing:'.055rem',
    border:'none'
  },
  updateLink: {
    textDecoration:'none',
    paddingRight:'15px',
    fontSize:'.7rem'
  },
  deleteLink: {
    textDecoration:'none',
    paddingRight:'15px',
    fontSize:'.7rem',
    color:'red'
  },
  image:{
    maxHeight:"95%",
    maxWidth:"95%"
  },
  btn:{
    backgroundColor: "#555555",
    border: "none",
    color: "white",
    padding: "15px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "12px",
    margin: "4px 2px",
    cursor: "pointer"
  }
}

module.exports = style;