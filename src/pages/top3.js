return (
       <>

         <h1 className={styles.title}>top3</h1>
         <h2 className={styles.sub}>What are your three main priorities for the day?</h2>
       
         <form>
           <input
              type="text"
              name="ItemOne"
              id="ItemOne"
              placeholder="Most Important Task"
            />
            <input
              type="text"
              name="ItemTwo"
              id="ItemTwo"
              placeholder="Very Important Task"
            />
            <input
              type="text"
              name="ItemThree"
              id="ItemThree"
              placeholder="Less Important Task"
            />
            <input
              type="button"
              defaultValue="Update"
              id="btnSubmit"
              onclick="Top3()"
            />
            <input
              type="button"
              defaultValue="Clear"
              id="clearEntry"
              onclick="clearForm()"
            />
            <div className="outputDisplay">
              <p id="p1" />
              <p id="p2" />
              <p id="p3" />
            </div>
</form>
       </>
    );
  }