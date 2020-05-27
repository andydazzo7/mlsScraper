from selenium import webdriver
import pandas as pd
import pytz
from datetime import date, datetime
titleList =[]
links = []
dates=[]
### This part is just to get today's date for the file name
dateToday = datetime.now().date()
dateToday = dateToday.strftime("%B %d, %Y")
print(dateToday)
##### end date

### This creates a webdriver, which you need to scrape data. You'll have to download pahntomjs from https://phantomjs.org/download.html, unzip it
## and then you can put it onto your desktop
driver = webdriver.PhantomJS(executable_path = '/Users/INSERTYOURNAMEHERE/Desktop/phantomjs')
##add the link you want to scrape from here 
driver.get('https://www.atlutd.com')
#### end setup

##the article titles are in div objects with the name 'node-title' this line will give you a list of all of those.
titles = driver.find_elements_by_class_name('node-title')
##loop through the titles and take their .text, which will get the title string, and add it to a list
for i in titles:
    ##this will get the link to each article that is contained within the clickable title on the site
    link = i.find_element_by_tag_name('a').get_attribute('href')
    ##add the link and title to our list
    titleList.append(i.text)
    links.append(link)
##the release dates are in divs called timestamp, do the same find and loop procedure as titles
times = driver.find_elements_by_class_name('timestamp')
for i in times:
    dates.append(i.text)
##create a dictionary from our lists so we can create a csv file using pandas
data = {
    'title' : titleList,
    'link' : links,
    'Release Date' : dates
}
##create a dataframe using pandas, and print it as a test
df = pd.DataFrame(data)
print df 
###this is what your file will be named, with today's date
filename = "AtlantaUnitedTopArticles{}.csv".format(dateToday)
###this makes it an actual file
df.to_csv(filename, encoding = 'utf-8')
       