# Exercise 2: Andrea D'Angelo 266635, Homework 3
from pyplasm import *
from scipy import *

import os,sys

# N.B. : PER UNA CORRETTA VISUALIZZAZIONE, SOSTITUIRE IL PATH CORRENTE 
#        CON QUELLO DOVE E' SITUATA LA LIBRERIA lar-cc .
sys.path.insert(0, '/Library/Python/2.7/site-packages/lar-cc/lib/py/')
from sysml import *

""" From Exercise 1 : """

# Visualizer:

DRAW = COMP([VIEW,STRUCT,MKPOLS])

""" Diagrams: """

# Apartment:

apartment = assemblyDiagramInit([11,11,3])([[.3,3.5,.1,3.3,.1,2.3,.1,1.3,.3,1.8,.3],
									[.3,1.6,.3,1.9,.1,1,.1,1,.1,4.7,.3],[.3,3,.3]])


# Generate hpc object:

hpc_apartment = SKEL_1(STRUCT(MKPOLS(apartment)))

# Numbering cells:

hpc_apartment = cellNumbering (apartment,hpc_apartment)(range(len(apartment[1])),YELLOW,1)

#VIEW(hpc_apartment)

""" Doors: """

# Entry Door:

entry_door = assemblyDiagramInit([3,1,2])([[1.2,.9,1.2],[.3],[2.1,.9]])

hpc_entry_door = SKEL_1(STRUCT(MKPOLS(entry_door)))

hpc_entry_door = cellNumbering(entry_door,hpc_entry_door)(range(len(entry_door[1])),GREEN,1)

#VIEW(hpc_entry_door)

# Kitchen Door:

kitchen_door = assemblyDiagramInit([1,3,2])([[.1],[.55,.8,.55],[2.1,.9]])

hpc_kitchen_door = SKEL_1(STRUCT(MKPOLS(kitchen_door)))

hpc_kitchen_door = cellNumbering(kitchen_door,hpc_kitchen_door)(range(len(kitchen_door[1])),GREEN,1)

#VIEW(hpc_kitchen_door)

# Room 1 door:

room_1_door = assemblyDiagramInit([1,3,2])([[.1],[1.9,.8,2],[2.1,.9]])

hpc_room_1_door = SKEL_1(STRUCT(MKPOLS(room_1_door)))

hpc_room_1_door = cellNumbering(room_1_door,hpc_room_1_door)(range(len(room_1_door[1])),GREEN,1)

#VIEW(hpc_room_1_door)

# Room 2 door:

room_2_door = assemblyDiagramInit([1,3,2])([[.1],[1.9,.8,2],[2.1,.9]])

hpc_room_2_door = SKEL_1(STRUCT(MKPOLS(room_2_door)))

hpc_room_2_door = cellNumbering(room_2_door,hpc_room_2_door)(range(len(room_2_door[1])),GREEN,1)

#VIEW(hpc_room_2_door)

# Bathe door:

bathe_door = assemblyDiagramInit([1,3,2])([[.1],[.1,.8,.1],[2.1,.9]])

hpc_bathe_door = SKEL_1(STRUCT(MKPOLS(bathe_door)))

hpc_bathe_door = cellNumbering(bathe_door,hpc_bathe_door)(range(len(bathe_door[1])),GREEN,1)

#VIEW(hpc_bathe_door)

# Closet door:

closet_door = assemblyDiagramInit([1,3,2])([[.1],[.1,.8,.1],[2.1,.9]])

hpc_closet_door = SKEL_1(STRUCT(MKPOLS(closet_door)))

hpc_closet_door = cellNumbering(closet_door,hpc_closet_door)(range(len(closet_door[1])),GREEN,1)

#VIEW(hpc_closet_door)

# Shower room:

shower_room = assemblyDiagramInit([3,1,1])([[.4,1,.4],[.1],[3]])

hpc_shower_room = SKEL_1(STRUCT(MKPOLS(shower_room)))

hpc_shower_room = cellNumbering(shower_room,hpc_shower_room)(range(len(shower_room[1])),GREEN,1)

#VIEW(hpc_shower_room)

""" Windows: """

# Kitchen window:

kitchen_window = assemblyDiagramInit([1,3,3])([[.3],[.1,1.4,.1],[.75,1.4,.85]])

hpc_kitchen_window = SKEL_1(STRUCT(MKPOLS(kitchen_window)))

hpc_kitchen_window = cellNumbering(kitchen_window,hpc_kitchen_window)(range(len(kitchen_window[1])),GREEN,1)

#VIEW(hpc_kitchen_window)

# Lounge window:

lounge_window = assemblyDiagramInit([3,1,2])([[1.05,1.2,1.05],[.3],[2.15,0.85]])

hpc_lounge_window = SKEL_1(STRUCT(MKPOLS(lounge_window)))

hpc_lounge_window = cellNumbering(lounge_window,hpc_lounge_window)(range(len(lounge_window[1])),GREEN,1)

#VIEW(hpc_lounge_window)

# Bathe window:

bathe_window = assemblyDiagramInit([3,1,3])([[.6,.6,.6],[.3],[0.75,1.4,0.85]])

hpc_bathe_window = SKEL_1(STRUCT(MKPOLS(bathe_window)))

hpc_bathe_window = cellNumbering(bathe_window,hpc_bathe_window)(range(len(bathe_window[1])),GREEN,1)

#VIEW(hpc_bathe_window)

# Room 1 window:

room_1_window = assemblyDiagramInit([3,1,3])([[1.15,1.2,1.15],[.3],[.75,1.4,.85]])

hpc_room_1_window = SKEL_1(STRUCT(MKPOLS(room_1_window)))

hpc_room_1_window = cellNumbering(room_1_window,hpc_room_1_window)(range(len(room_1_window[1])),GREEN,1)

#VIEW(hpc_room_1_window)

# Room 2 window:

room_2_window = assemblyDiagramInit([3,1,3])([[.55,1.2,.55],[.3],[.75,1.4,.85]])

hpc_room_2_window = SKEL_1(STRUCT(MKPOLS(room_2_window)))

hpc_room_2_window = cellNumbering(room_2_window,hpc_room_2_window)(range(len(room_2_window[1])),GREEN,1)

#VIEW(hpc_room_2_window)

""" Balcony ( I forgot it! XD ): """

balcony = assemblyDiagramInit([3,2,3])([[.1,2.2,.1],[1,.1],[.3,1,.1]])

hpc_balcony = SKEL_1(STRUCT(MKPOLS(balcony)))

hpc_balcony = cellNumbering(balcony,hpc_balcony)(range(len(balcony[1])),GREEN,1)

#VIEW(hpc_balcony)

# Removing useless cells:

toRemove = [7,8]

V,CV = balcony

balcony = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

#DRAW (balcony)

V,CV = balcony

hpc_balcony = STRUCT(MKPOLS(balcony))

hpc_balcony = T([1,2])([4.35,11.4])(hpc_balcony)

#VIEW(hpc_balcony)

""" Assembly apartment with doors and windows: """

# Assembly doors:

apartment = diagram2cell(entry_door,apartment,100)
apartment = diagram2cell(kitchen_door,apartment,141)
apartment = diagram2cell(room_1_door,apartment,94)
apartment = diagram2cell(room_2_door,apartment,157)
apartment = diagram2cell(closet_door,apartment,216)
apartment = diagram2cell(bathe_door,apartment,210)
apartment = diagram2cell(shower_room,apartment,310)

# Assembly windows:

apartment = diagram2cell(kitchen_window,apartment,262)
apartment = diagram2cell(lounge_window,apartment,128)
apartment = diagram2cell(bathe_window,apartment,296)
apartment = diagram2cell(room_1_window,apartment,64)
apartment = diagram2cell(room_2_window,apartment,190)

# Renumbering apartment cells:

hpc_apartment = SKEL_1(STRUCT(MKPOLS(apartment)))
hpc_apartment = cellNumbering (apartment,hpc_apartment)(range(len(apartment[1])),YELLOW,1)
#VIEW(hpc_apartment)

# Removing useless cells, like: roof, doors, windows etc.

emptyChain = [2,5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,53,56,59,62,64,67,70,73,76,79,82,
			85,88,91,93,96,98,101,104,107,110,113,116,119,122,125,127,130,133,136,138,141,144,147,
			150,153,155,158,161,164,167,170,173,176,179,182,185,188,190,193,196,199,202,205,207,210,
			212,215,218,221,224,227,230,233,236,239,242,245,248,251,254,257,259,262,265,268,271,274,
			277,280,283,286,289,292,294,297,300,303,305,308,311,314,317,320,323,326,329,332,335,338,
			341,344,347,350,0,3,6,9,12,15,18,21,1,4,7,10,13,16,19,22,33,36,39,42,45,48,51,54,34,37,
			40,43,46,49,52,55,312,315,345,348,313,316,346,349,287,290,318,321,288,291,319,322,100,
			103,106,109,112,115,118,121,124,61,187,217,250,163,166,169,195,198,201,226,229,232,296,
			299,302,307,270,238,244,175,178,181,143,146,149,353,359,365,371,377,383,388,394,409,418,
			401,427]

solidCV = [cell for k,cell in enumerate(apartment[1]) if not (k in emptyChain)]
exteriorCV =  [cell for k,cell in enumerate(apartment[1]) if k in emptyChain]
exteriorCV += exteriorCells(apartment)

#DRAW((apartment[0],solidCV))

#VIEW(SKEL_1(STRUCT(MKPOLS([apartment[0],solidCV]))))

''' Final Apartment: '''

final_apartment = STRUCT(MKPOLS([apartment[0],solidCV]))

""" Exercise 2: """

# Apartment without balcony:

apartment_w_b = STRUCT(MKPOLS([apartment[0],solidCV]))

#apartment_w_b = T([1,2])([10,10])(apartment_w_b)

#VIEW(final_apartment)

final_apartment = STRUCT([final_apartment,hpc_balcony])

#final_apartment = T([1,2])([10,10])(final_apartment)

#VIEW(final_apartment)

# Funcion color:

def myColor(r,g,b):
   return Color4f(r/255.0,g/255.0,b/255.0,0.05)

# Building color:

building_color = myColor(200,138,101)

""" Make Building """

building = [T(3)(3),final_apartment]

base_building = [T(3)(3),apartment_w_b]

base_building = STRUCT(NN(2)(base_building))

#VIEW(base_building)

building = STRUCT(NN(5)(building))

#VIEW(building)

building = T(3)(6)(building)

#VIEW(building)

all_building = STRUCT([base_building,building])

all_building = COLOR(building_color)(all_building)

all_building = T([1,2])([5,5])(all_building)

#VIEW(all_building)

""" Generate Ground Floor : """

# Make diagram of elevator:

elevator = assemblyDiagramInit([5,3,2])([[.1,1.1,1.1,1.1,.1],[.1,3.3,.1],[.3,2.7]])

hpc_elevator = SKEL_1(STRUCT(MKPOLS(elevator)))

# Numbering cells:

hpc_elevator = cellNumbering (elevator,hpc_elevator)(range(len(elevator[1])),YELLOW,1)

#VIEW(hpc_elevator)

emptyChain = [11,17,23,9,15,21]

solidCV = [cell for k,cell in enumerate(elevator[1]) if not (k in emptyChain)]
exteriorCV =  [cell for k,cell in enumerate(elevator[1]) if k in emptyChain]
exteriorCV += exteriorCells(elevator)

elevator = STRUCT(MKPOLS([elevator[0],solidCV]))

#VIEW(elevator)

#DRAW((elevator[0],solidCV))

up_elevator = assemblyDiagramInit([5,3,2])([[.1,1.1,1.1,1.1,.1],[.1,3.3,.1],[.3,2.7]])

hpc_up_elevator = SKEL_1(STRUCT(MKPOLS(up_elevator)))

# Numbering cells:

hpc_up_elevator = cellNumbering (up_elevator,hpc_up_elevator)(range(len(up_elevator[1])),YELLOW,1)

#VIEW(hpc_up_elevator)

emptyChain = [11,17,23,9,15,21,8,10,14,16,20,22]

solidCV = [cell for k,cell in enumerate(up_elevator[1]) if not (k in emptyChain)]
exteriorCV =  [cell for k,cell in enumerate(up_elevator[1]) if k in emptyChain]
exteriorCV += exteriorCells(up_elevator)

up_elevator = STRUCT(MKPOLS([up_elevator[0],solidCV]))

up_elevator = T(3)(-.3)(up_elevator)

#VIEW(up_elevator)

""" Assembly elevator : """

elevator = [T(3)(3),elevator]

up_elevator = [T(3)(3),up_elevator]

base_elevator = STRUCT(NN(1)(elevator))

#VIEW(base_elevator)

top_elevator = STRUCT(NN(6)(up_elevator))

#VIEW(top_elevator)

top_elevator = T(3)(3)(top_elevator)

# Roof elevator:

roof_elevator = CUBOID([3.5,3.5,.6])

roof_elevator = T(3)(23.7)(roof_elevator)

#VIEW(roof_elevator)

final_elevator = STRUCT([base_elevator,top_elevator,roof_elevator])

#VIEW(final_elevator)

final_elevator = T([1,2])([8.8,1.5])(final_elevator)

# Color Elevator:

color_elevator = myColor(220,198,173)

final_elevator = COLOR(color_elevator)(final_elevator)

#VIEW(final_elevator)

all_building = STRUCT([all_building,final_elevator])

#VIEW(all_building)

""" Make Ground Floor : """

# Base Ground Floor :

base_ground_floor = CUBOID([13.4,11.4,.3])

base_ground_floor = T([1,2,3])([5,5,2.7])(base_ground_floor)

# Roof Ground Floor :

roof_ground_floor = CUBOID([13.4,11.4,.3])

roof_ground_floor = T([1,2,3])([5,5,24.3])(roof_ground_floor)

roof_2_ground_floor = CUBOID([3.7,3.7,.3])

roof_2_ground_floor = T([1,2,3])([8.6,1.3,24.3])(roof_2_ground_floor)

# Sub Ground Floor :

sub_ground_floor = CUBOID([13.4,11.4,2.7])

sub_ground_floor = T([1,2])([5,5])(sub_ground_floor)

# Make Stairway :

# Steps:

step_0 = CUBOID([13.4,3.5,.3])
step_1 = CUBOID([13.1,3.5,.6])
step_2 = CUBOID([12.8,3.5,.9])
step_3 = CUBOID([12.5,3.5,1.2])
step_4 = CUBOID([12.2,3.5,1.5])
step_5 = CUBOID([11.9,3.5,1.8])
step_6 = CUBOID([11.6,3.5,2.1])
step_7 = CUBOID([11.3,3.5,2.4])
step_8 = CUBOID([11,3.5,2.7])
step_9 = CUBOID([10.7,3.5,3])

# Stairway:

stairway = STRUCT([step_0,step_1,step_2,step_3,step_4,step_5,step_6,step_7,step_8,step_9])

stairway = T([1,2])([5,1.5])(stairway)

# Street :

street = CUBOID([22.4,18.4,.1])

street = T(3)(-.1)(street)

color_street = myColor(64,64,64)

street = COLOR(color_street)(street)

# All Ground Floor :

ground_floor = STRUCT([base_ground_floor,roof_ground_floor,roof_2_ground_floor,sub_ground_floor,stairway])

gf_color = myColor(152,142,142)

ground_floor = COLOR(gf_color)(ground_floor)


# Some curves:

# Bezier:

dom2d = PROD([INTERVALS(1)(40),INTERVALS(1)(40)])

# Funcion for mapping bezier curves in 2d :

def bezierMappata_2D(functions):
   x = BEZIER(S2)(functions)
   return MAP(x)(dom2d);

# Control points :

control_pts_1 = [[0,0,0],[1,0,0],[1,1,0],[0,1,0]]

bez_1 =BEZIER(S1)(control_pts_1)

control_pts_2 = [[0,0,21],[1,0,21],[1,1,21],[0,1,21]]

bez_2 =BEZIER(S1)(control_pts_2)

# 3D bezier:

bez_3_mapped = MAP (BEZIER(S2)([bez_1,bez_2]))(dom2d)

bez_traslata = T([1,2,3])([12.3,4,3]) (bez_3_mapped)

# Bezier Top:

cover_bezier = CUBOID([.8,1.2,.6])

cover_bezier = T([1,2,3])([12.3,3.8,24])(cover_bezier)

# Final struct for bezier

final_bezier = STRUCT([bez_traslata,cover_bezier])

bez_color = gf_color

final_bezier = COLOR(bez_color)(final_bezier)

""" Some Trappings XD : """

# Lamps :

# Base Lamp:

base_lamp = CYLINDER([.2,3.3])(32)

colorBaseLamp = myColor(67,67,67)

base_lamp = COLOR(colorBaseLamp)(base_lamp)

# Top Lamp:

top_lamp = SPHERE(.5)([32,32])

top_lamp = T(3)(3)(top_lamp)

colorTopLamp = myColor(245,253,191)

top_lamp = COLOR(colorTopLamp)(top_lamp)

# Lamp:

lamp = STRUCT([base_lamp,top_lamp])

# Lamp 1 :

lamp_1 = T([1,2,3])([6.5,4,3])(lamp)

# Lamp 2 :

lamp_2 = T([1,2,3])([6.5,8,3])(lamp)

# Lamp 3 :

lamp_3 = T([1,2,3])([17.5,15,3])(lamp)

# Lamps:

lamps = STRUCT([lamp_1,lamp_2,lamp_3])

""" All togheter : """

all_building = STRUCT([all_building,ground_floor,final_bezier,lamps,street])

VIEW(all_building)

