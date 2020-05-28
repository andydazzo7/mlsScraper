from selenium import webdriver
import pandas as pd
import pytz
from datetime import date, datetime
import time
titleList =[]
links = []
dates=[]
### This part is just to get today's date for the file name
dateToday = datetime.now().date()
dateToday = dateToday.strftime("%B %d, %Y")
print(dateToday)
##### end date
team_links = ['https://www.atlutd.com/', 'https://www.chicagofirefc.com/', 'https://www.fccincinnati.com/', 'https://www.coloradorapids.com/', 'https://www.columbuscrewsc.com/'
,'https://www.fcdallas.com/', 'https://www.dcunited.com/', 'https://www.houstondynamo.com/', 'https://www.lafc.com/', 'https://www.lagalaxy.com/', 'https://www.intermiamicf.com/',
'https://www.mnufc.com/', 'https://www.impactmontreal.com/',  'https://www.nashvillesc.com/',
 'https://www.revolutionsoccer.net/','https://www.nycfc.com/', 'https://www.newyorkredbulls.com/', 'https://www.orlandocitysc.com/', 'https://www.philadelphiaunion.com/',
  'https://www.timbers.com/','https://www.rsl.com/', 'https://www.sjearthquakes.com/', 'https://www.soundersfc.com/', 'https://torontofc.ca', 'https://www.whitecapsfc.com/']
#team_links=['https://www.fcdallas.com/']

### This creates a webdriver, which you need to scrape data. You'll have to download pahntomjs from https://phantomjs.org/download.html, unzip it
## and then you can put it onto your desktop
driver = webdriver.PhantomJS(executable_path = '/Users/andydazzo/Desktop/phantomjs')
##add the link you want to scrape from here 
for team in team_links:
    try:
        teamstr = team.replace("https://www.","")
        teamstr = teamstr.replace("/", "")
        driver.get(team)
        #### end setup

        ##the article titles are in div objects with the name 'node-title' this line will give you a list of all of those.
        titles = driver.find_elements_by_class_name('node-title')
        ##loop through the titles and take their .text, which will get the title string, and add it to a list
        for i in range(6):
            title = titles[i]
            print(title.text)
            ##this will get the link to each article that is contained within the clickable title on the site
            link = title.find_element_by_tag_name('a').get_attribute('href')
            ##add the link and title to our list
            titleList.append(title.text)
            links.append(link)
        ##the release dates are in divs called timestamp, do the same find and loop procedure as titles
        times = driver.find_elements_by_class_name('timestamp')
        for i in range(6):
            date = times[i]
            dates.append(date.text)
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
        filename = "{}{}.csv".format(teamstr, dateToday)
        ###this makes it an actual file
        df.to_csv(filename, encoding = 'utf-8')
        titleList[:] = []
        links[:]=[]
        dates[:]= []
    except:
        print('failed on {}'.format(teamstr))