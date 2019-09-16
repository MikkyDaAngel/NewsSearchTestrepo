package steps;

import Base.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;

public class Hook extends BaseUtil {

    @Before
    public void InitializeTest(Scenario scenario) {
        //Chrome driver windows
        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\src\\drivers\\chromedriver.exe");

        //Chrome driver mac
        //System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/src/drivers/chromedriver");

        Driver = new ChromeDriver();
        Driver.manage().window().maximize();
        Driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @After
    public void TearDownTest(Scenario scenario) {
        Driver.quit();
    }
}

