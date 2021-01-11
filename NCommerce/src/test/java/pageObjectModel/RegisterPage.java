package pageObjectModel;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class RegisterPage {

	WebDriver driver;
	
	public RegisterPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
@FindBy(xpath="//input[@id='Email']")
WebElement email;

public void enterEmail() {
	email.clear();
	email.sendKeys("admin@yourstore.com");
}
@FindBy(xpath="//input[@id='Password']")
WebElement pass;

public void enterPass() {
	pass.clear();
	pass.sendKeys("admin");
}
@FindBy(xpath="//input[@class='button-1 login-button']")
WebElement login;
public void clicklogin() {
	login.click();
}
@FindBy(xpath="(//span[contains(text(),'Customers')])[1]")
WebElement Customer;

public void clickcustomer() {
	Customer.click();
}
@FindBy(xpath="(//span[contains(text(),'Customers')])[2]")
WebElement Rcustomer;
public void clickRcus() {
	Rcustomer.click();
}
@FindBy(xpath="//a[@class='btn bg-blue']")
WebElement addNew;
public void clickAddNew() {
	addNew.click();
}
@FindBy(xpath="//input[@id='Email']")
WebElement Useremail;
public void enterUseremail() {
	Useremail.sendKeys("himu1125@hotmail.com");
	
	
}
@FindBy(xpath="//input[@id='Password']")
WebElement userPass;

public void enterUserPass() {
	userPass.sendKeys("lana6220");
	
	
	}
@FindBy(xpath="//input[@id='FirstName']")
WebElement Firstname;
public void enterFirstname() {
	Firstname.sendKeys("Himu");
	
}
@FindBy(xpath="//input[@id='LastName']")
WebElement lastName;

public void enterlastName() {
	lastName.sendKeys("Ahmed");
	
}
@FindBy(xpath="//input[@id='Gender_Male']")
WebElement malebutton;

public void clickmale() throws InterruptedException {
	malebutton.click();
	
}

/*
while(true) {
	String month="October 2020";
	String mon=driver.findElement(By.xpath("//a[@class='k-link k-nav-fast']")).getText();
	if (mon.contentEquals(month)) {
		break;
		
	}else {
		driver.findElement(By.xpath("//a[@class='k-link k-nav-next']")).click();
		Thread.sleep(3000);
	}
	
	driver.findElement(By.xpath("//div[@id='DateOfBirth_dateview']//div[1]//div[2]//table//tbody//tr[4]//td[3]//a")).click();
	//driver.findElement(By.xpath("//input[@id='DateOfBirth']")).click();
}
}*/


/*
public void RadioButton() throws InterruptedException {
WebElement fm = driver.findElement(By.xpath("//input[contains(@id,'u_1_4')]"));
fm.click();
boolean f = fm.isEnabled();
System.out.println(f);
Thread.sleep(2000);
}*/

@FindBy(xpath="//input[@id='Company']")
WebElement companyName;
public void enterCompanyName() throws InterruptedException {
	Thread.sleep(3000);
	companyName.sendKeys("ABC");
}
@FindBy(xpath="//input[@id='IsTaxExempt']")
WebElement taxExempt;
public void checkTaxExempt() throws InterruptedException {
	Thread.sleep(2000);
	taxExempt.click();
}

public void birthDate() throws InterruptedException{
driver.findElement(By.xpath("(//span[@class='k-select'])[1]")).click();
}
public void Dropdown() throws InterruptedException {
WebElement M = driver.findElement(By.id("month"));
M.click();
Select s1 = new Select(M);
s1.selectByValue("7");
Thread.sleep(3000);
}

public void Dropdown1() throws InterruptedException {
WebElement D = driver.findElement(By.id("day"));
D.click();
Select s1 = new Select(D);
s1.selectByValue("7");
Thread.sleep(3000);
}

public void Dropdown2() throws InterruptedException {
WebElement Y = driver.findElement(By.id("year"));
Y.click();
Select s1 = new Select(Y);
s1.selectByValue("2000");
Thread.sleep(3000);
}
/*
@FindBy(xpath="(//div[@class='k-multiselect-wrap k-floatwrap'])[2]")
WebElement newsLetter;
public void enterNewsletter() throws InterruptedException {
	Thread.sleep(4000);
	newsLetter.sendKeys("Test Store 1");
	
}*/

public void newsLetter() throws InterruptedException {
	JavascriptExecutor js = (JavascriptExecutor) driver;
	WebElement news = driver.findElement(By.className("k-multiselect-wrap k-floatwrap"));
	js.executeScript("arguments[0].value='TestStore1'", news);
	Thread.sleep(2000);
}
@FindBy(xpath="(//div[@class='k-multiselect-wrap k-floatwrap'])[1]")
WebElement CustomerRoles;
public void CustRoles() throws InterruptedException {
	Thread.sleep(2000);
	CustomerRoles.sendKeys("admin");
}
@FindBy(xpath="(//input[@class='check-box'])[2]")
WebElement activeCheckbox;
public void activecheckboxSelect() throws InterruptedException {
	Thread.sleep(2000);
activeCheckbox.click();
}
@FindBy(xpath="//textarea[@id='AdminComment']")
WebElement AdminComment;
public void enterAdminComment() throws InterruptedException {
	Thread.sleep(4000);
	AdminComment.sendKeys("enter admin comment within 800 characters");
}
@FindBy(xpath="(//button[@type='submit'])[2]")
WebElement SaveButton;
public void clickSavebutton() throws InterruptedException {
	Thread.sleep(3000);
	SaveButton.click();
}
}
