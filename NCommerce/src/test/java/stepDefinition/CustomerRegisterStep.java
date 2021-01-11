package stepDefinition;

import org.testng.Assert;

import com.common.Base;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import pageObjectModel.RegisterPage;

public class CustomerRegisterStep extends Base{
	RegisterPage rp;
	
	
	
	@Given("^user on homepage$")
	public void user_on_homepage() throws Throwable {
	   getDriver();
	   
	    
	}

	@When("^user enter email in the email box$")
	public void user_enter_email_in_the_email_box() throws Throwable {
	   rp=new RegisterPage(driver);
	   rp.enterEmail();
	    
	}

	@When("^user enter password$")
	public void user_enter_password() throws Throwable {
	   rp.enterPass();
	    
	}

	@When("^user clicks on login$")
	public void user_clicks_on_login() throws Throwable {
	   rp.clicklogin();
	    
	}

	@When("^user clicks on customers$")
	public void user_clicks_on_customers() throws Throwable {
	   rp.clickcustomer();
	    
	}

	@When("^user clicks on customers radio button$")
	public void user_clicks_on_customers_radio_button() throws Throwable {
	   rp.clickRcus();
	    
	}

	@When("^user clicks new user button$")
	public void user_clicks_new_user_button() throws Throwable {
	   rp.clickAddNew();
	    
	}

	@When("^user enters email$")
	public void user_enters_email() throws Throwable {
	   rp.enterUseremail();
	    
	}

	@When("^user enters password$")
	public void user_enters_password() throws Throwable {
	   rp.enterUserPass();
	    
	}

	@When("^user enters first name$")
	public void user_enters_first_name() throws Throwable {
	   rp.enterFirstname();
	    
	}

	@When("^user enters last Name$")
	public void user_enters_last_Name() throws Throwable {
	   rp.enterlastName();
	    
	}

	@When("^user clicks gender make radio button$")
	public void user_clicks_gender_make_radio_button() throws Throwable {
	   rp.clickmale();
	    
	}
	

	@When("^user choose date of birth$")
	public void user_choose_date_of_birth() throws Throwable {
	   rp.birthDate();
	    
	}

	@When("^user enter company name$")
	public void user_enter_company_name() throws Throwable {
	   rp.enterCompanyName();
	    
	}

	@When("^user clicks on tax exempt$")
	public void user_clicks_on_tax_exempt() throws Throwable {
	   rp.checkTaxExempt();
	    
	}

	@When("^user chooses newsletter$")
	public void user_chooses_newsletter() throws Throwable {
	   rp.newsLetter();
	    
	}

	@When("^user chooses customers roles$")
	public void user_chooses_customers_roles() throws Throwable {
	   rp.CustRoles();
	    
	}

	@When("^user clicks active check box$")
	public void user_clicks_active_check_box() throws Throwable {
	   rp.activecheckboxSelect();
	    
	}

	@When("^user adds comments on admin comment box$")
	public void user_adds_comments_on_admin_comment_box() throws Throwable {
	   rp.enterAdminComment();
	    
	}

	@When("^user clciks on save button$")
	public void user_clciks_on_save_button() throws Throwable {
	   
	    rp.clickSavebutton();
	}

	@When("^user adds new customer successfully$")
	public void user_adds_new_customer_successfully() throws Throwable {
	   
	    String title=driver.getTitle();
	    Assert.assertEquals(title, "The new customer has been added successfully" );
	}


}
