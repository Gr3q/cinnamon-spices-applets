from datetime import timedelta
from typing import List


try:
	import feedparser
	import json
	import argparse
	import datetime
	from dateutil import tz
	import time
	from typing import cast
	import re

	parser = argparse.ArgumentParser(description='Gets Environmental Canada tada and returns it as JSON string')
	parser.add_argument('--url', metavar='url', type=str,
							help='url to get feed from')

	args = parser.parse_args()
	if args.url == None:
		print(json.dumps({"error": {"type": "params", "message": "Invalid parameters, must contain url"}}))
		quit()

	def DirToDegree(dir: str) -> float:
		if (dir == "N"):
			return 0
		elif (dir == "NNE"):
			return 22.5
		elif (dir == "NE"):
			return 2 * 22.5
		elif (dir == "ENE"):
			return 3 * 22.5
		elif (dir == "E"):
			return 4 * 22.5
		elif (dir == "ESE"):
			return 5 * 22.5
		elif (dir == "SE"):
			return 6 * 22.5
		elif (dir == "SSE"):
			return 7 * 22.5
		elif (dir == "S"):
			return 8 * 22.5
		elif (dir == "SSW"):
			return 9 * 22.5
		elif (dir == "SW"):
			return 10 * 22.5
		elif (dir == "WSW"):
			return 11 * 22.5
		elif (dir == "W"):
			return 12 * 22.5
		elif (dir == "WNW"):
			return 13 * 22.5
		elif (dir == "NW"):
			return 14 * 22.5
		elif (dir == "NNW"):
			return 15 * 22.5
		else:
			return None

	def strToTemp(text: List[str]) -> float:
		'''Finds and parses the temperature in the forecast summary'''
		for item in text:
			if "Temperature" in item or \
				"High" in item or \
				"Low" in item:
				words = item.split()
				for word in words:
					if word == "zero":
						return 0
					try:
						num = float(word)
						if (words[words.index(word) - 1] == "minus"):
							return float(f"-{word}")
						else:
							return num
					except ValueError:
						continue
				text = text.replace("High ", "").replace("Low ", "")
				items = text.split()
				if "minus" in text:
					items = text.split()
					return float(f"-{items[1]}")
				else:
					temp = items[1] if items[0] == "plus" else items[0]
					if (temp == "zero"):
						temp = "0"
					return float(temp)
		return None

	weather = {
		"url": None,
		# POSIX seconds
		"date": None,
		# C
		"temperature": None,
		# hPa
		"pressure": None,
		# %
		"humidity": None,
		# m/s
		"wind_speed": None,
		# degrees
		"wind_dir": None,
		# C
		"wind_chill": None,
		# str
		"condition": None,
		"forecasts": []
	}

	feed = feedparser.parse(args.url)
	current = feed.entries[1]
	forecasts = feed.entries[2:]
	curDate = datetime.datetime(int(current.updated[0:4]), int(current.updated[5:7]), int(current.updated[8:10]), int(current.updated[11:13]), int(current.updated[14:16]), int(current.updated[17:19]), tzinfo=tz.UTC)
	weather["date"] =  time.mktime(curDate.timetuple())
	weather["url"] = args.url;

	for line in current.summary.split("<br />\n"):
		line = cast(str, line).replace(r"<b>", "").replace(r"</b>", "")
		key, val = line.split(":", maxsplit=1)
		val = val.strip()
		if ("Condition" in key):
			weather["condition"] = val
		elif ("Temperature" in key):
			weather["temperature"] = float(val.replace("&deg;C", ""))
		elif ("Wind Chill" in key):
			weather["wind_chill"] = float(val.strip())
		elif ("Pressure" in key):
			weather["pressure"] = float(val.split(" ")[0]) * 10 # in hPa
		elif ("Humidity" in key):
			weather["humidity"] = int(val.replace("%", ""))	
		elif ("Wind" == key):
			direction, speed, unit = val.split(" ")
			weather["wind_speed"] = float(speed) * 5 / 18 # in m/s
			weather["wind_dir"] = DirToDegree(direction)

	forecastDate = curDate = datetime.datetime(
		int(forecasts[0].updated[0:4]),
		int(forecasts[0].updated[5:7]),
		int(forecasts[0].updated[8:10]),
		int(forecasts[0].updated[11:13]),
		int(forecasts[0].updated[14:16]),
		int(forecasts[0].updated[17:19]), tzinfo=tz.UTC)

	curForecast = {
		"date": None,
		"temp_min": None,
		"temp_max": None,
		"condition": None
	}

	for item in forecasts:
		#print(item)
		title = cast(str, item.title).replace(":", ".").split(".")
		condition = title[1]
		# Fill in current observation from forecast if needed
		if weather["condition"] == None:
			weather["condition"] = condition.strip()

		if not ("night" in item.title):
			curForecast["condition"] = condition.strip()
			curForecast["temp_max"] = strToTemp(title)
		else:
			if (curForecast["condition"] == None):
				curForecast["condition"] = condition.strip()
			curForecast["temp_min"] = strToTemp(title)

		if ("night" in item.title):
			curForecast["date"] = time.mktime(forecastDate.timetuple())
			weather["forecasts"].append(curForecast)
			forecastDate = forecastDate + timedelta(hours=24)
			curForecast = {}
	
	# Last one didnt have night, still append
	if (curForecast != {}):
		curForecast["date"] = time.mktime(forecastDate.timetuple())
		weather["forecasts"].append(curForecast)

	print(json.dumps(weather))

except ImportError as e:
	print(json.dumps({"error": {"type": "import", "message": "Couldn't import packages", "data": str(e)}}))
except ConnectionError as e:
	print(json.dumps({"error": {"type": "network", "message": "Could not connect to API", "data": str(e)}}))
except Exception as e:
	print(json.dumps({"error": {"type": "unknown", "message": "Unexpected Error", "data": str(e)}}))