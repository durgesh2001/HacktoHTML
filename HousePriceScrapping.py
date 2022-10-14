from bs4 import BeautifulSoup
import requests
from csv import writer
url = "https://www.pararius.com/apartments/amsterdam"
page = requests.get(url)

soup = BeautifulSoup(page.content,'html.parser')

lists = soup.find_all('section',class_="listing-search-item")

with open("HousingData.csv",'w',encoding='utf8',newline="") as f:
    thewriter =writer(f)
    header = ['Title','Location', 'Price','Area']
    thewriter.writerow(header)
    for list in lists :
        title = list.find('a',class_="listing-search-item__link--title").get_text().replace('\n','').strip()
        location = list.find('div',class_="listing-search-item__sub-title").get_text().replace('\n','').strip()
        price = list.find('div',class_="listing-search-item__price").get_text().replace('\n','').strip()
        area = list.find('li',class_="illustrated-features__item illustrated-features__item--surface-area").get_text().replace('\n','').strip()
        info =[title,location,price ,area ]
        print(info)
        thewriter.writerow(info)