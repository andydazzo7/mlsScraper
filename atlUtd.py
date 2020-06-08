from selenium import webdriver
import pandas as pd
import pytz
from datetime import date, datetime
import time
import mysql.connector

mydb = mysql.connector.connect(
  host="mls.cet8db5wesjz.us-east-1.rds.amazonaws.com",
  user="admin",
  passwd="MLSrocks1!", 
  port="3306", 
  database="mls"
)

print(mydb)
mycursor = mydb.cursor()


titleList =[]
links = []
dates=[]
teams = []
### This part is just to get today's date for the file name
dateToday = datetime.now().date()
dateToday = dateToday.strftime("%B %d, %Y")
dateAddeds = []
print(dateToday)
##### end date
team_links = ['https://www.atlutd.com/', 'https://www.chicagofirefc.com/', 'https://www.fccincinnati.com/', 'https://www.coloradorapids.com/', 'https://www.columbuscrewsc.com/'
,'https://www.fcdallas.com/', 'https://www.dcunited.com/', 'https://www.houstondynamo.com/', 'https://www.lafc.com/', 'https://www.lagalaxy.com/', 'https://www.intermiamicf.com/',
'https://www.mnufc.com/', 'https://www.impactmontreal.com/',  'https://www.nashvillesc.com/',
 'https://www.revolutionsoccer.net/','https://www.nycfc.com/', 'https://www.newyorkredbulls.com/', 'https://www.orlandocitysc.com/', 'https://www.philadelphiaunion.com/',
  'https://www.timbers.com/','https://www.rsl.com/', 'https://www.sjearthquakes.com/', 'https://www.soundersfc.com/', 'https://torontofc.ca', 'https://www.whitecapsfc.com/']

### This creates a webdriver, which you need to scrape data. You'll have to download pahntomjs from https://phantomjs.org/download.html, unzip it
## and then you can put it onto your desktop
driver = webdriver.PhantomJS(executable_path = '/Users/andydazzo/Desktop/phantomjs')
for team in team_links:
    try:
        teamstr = team.replace("https://www.","")
        teamstr = teamstr.replace("/", "")
        teamstr = teamstr.replace('.com', "")
        teamstr = teamstr.replace('.ca', '')
        teamstr = teamstr.replace('.net', '')
        print(teamstr)
        driver.get(team)
        #### end setup

        ##the article titles are in div objects with the name 'node-title' this line will give you a list of all of those.
        titles = driver.find_elements_by_class_name('node-title')
        times = driver.find_elements_by_class_name('timestamp')
        images = driver.find_elements_by_class_name('field-items')
        ##loop through the titles and take their .text, which will get the title string, and add it to a list
        for i in range(5):
            imgover = images[i]
            img = imgover.find_element_by_tag_name('img').get_attribute('src')
            print img
            title = titles[i]
            print(title.text)
            ##this will get the link to each article that is contained within the clickable title on the site
            link = title.find_element_by_tag_name('a').get_attribute('href')
            ##add the link and title to our list
            titleList.append(title.text)
            links.append(link)
            dateAddeds.append(dateToday)
            print(dateToday)
            teams.append(teamstr)
            print(teamstr)
        ##the release dates are in divs called timestamp, do the same find and loop procedure as titles
            date = times[i]
            print(date.text)
            dates.append(date.text)
            sql = "INSERT INTO data (title, link, release_date, date_added, team, image) VALUES (%s, %s, %s, %s, %s, %s)"
            val = (title.text, link, date.text, dateToday, teamstr, img)
            mycursor.execute(sql, val)
            mydb.commit()

            print(mycursor.rowcount, "record inserted.")
        ##create a dictionary from our lists so we can create a csv file using pandas
        data = {
            'title' : titleList,
            'link' : links,
            'Release_Date' : dates,
            'Date_Added' :dateAddeds, 
            'team' : teams
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
        dateAddeds[:]  = []
        teams[:] = []
    except:
        print('failed on {}'.format(teamstr))