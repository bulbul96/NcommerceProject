package testrunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		features="Features",
		glue="stepDefinition",
		plugin="pretty",
		monochrome=true
		//plugin= {"pretty", "html:testOutput"}
		
		)
public class TestRunner extends AbstractTestNGCucumberTests {

}
