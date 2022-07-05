```css
/* used to prevent text-selection */
.no-select {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
}

/* 
<div class='align-items'>
    <div class='left'>...</div>
    <div class='void'>...</div>
    <div class='right'>...</div>
    <div class='right'>...</div>
</div>
 */
.align-items {
    width: 100%;
    display: flex;
}
.align-items > .left {
    margin-right: 10px;
}
.align-items > .void {
    flex: auto;
}
.align-items > .right {
    margin-left: 10px;
}

/* <div className='page-not-found'>
    <h1>404 Page Not Found</h1>
    <div className='options'>
        <Link to="/">🏠 Home</Link>
        <GoBack>↩ Last Page</GoBack>
    </div>
</div> */
.page-not-found {
    text-align: center;
}
.page-not-found > .options > * {
    margin: 10px;
}

.error-message {
    color: #D8000C;
    background-color: #FFD2D2;
    border: 3px outset red;
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
}
.error-message h1 {
    text-align: center;
}
.error-message h1::before, .error-message h1::after {
    content: '❌';
}
```