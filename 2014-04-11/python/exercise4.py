#  Temle of Concordia, Andrea D'Angelo, 266635, exercise3

# imports:

import sys

# N.B. : PER UNA CORRETTA VISUALIZZAZIONE, SOSTITUIRE IL PATH CORRENTE 
#        CON QUELLO DOVE E' SITUATA LA LIBRERIA lar-cc .

sys.path.insert(0,'/Library/Python/2.7/site-packages/lar-cc/lib/py/')

from boolean import *
from boolean1 import *
from boolean2 import *
from lar2psm import *
from larcc import *
from largrid import *
from mapper import *
from morph import *
from myfont import *
from simplexn import *
from pyplasm import *

#---------------------------------------------------------------------------------

# Constrains:

height_floors = 0.6
base_floor0 = 16.91
height_floor0 = 39.44
base_floor1 = 15.91
height_floor1 = 38.44
base_floor2 = 14.91
height_floor2 = 37.44
base_floor3 = 13.91
height_floor3 = 36.44
height_internal_walls = 6.92
base_floor4 = 0.3
height_floor4 = 30.08
base_floor6 = 7
height_floor6 = 0.3
base_floor7 = 2.5
height_floor7 = 1.2
cilynder_radius = 0.3
cilynder_height = 6.72
torus_a = 0.1
torus_b = 0.3
end_capital_base = 1
end_capital_height = 0.1
roof_radius = 1
roof_height = 6
roof_n = 2

#---------------------------------------------------------------------------------

# Functions:

# Function rectangular base floors:
def rectBase(l1,l2,height):
  return CUBOID([l1,l2,height])

# Functions gable:
def Gable(radius,h,n):
  w = 1.2*radius
  l = 3*n*(2*w)
  apex = MKPOL([[[l/2,0,h/2],[l/2,w,h/2]],[[1,2]], None])
  
  basis = COMP([EMBED(1),CUBOID])([l,w])
  
  return JOIN([basis,apex])

# Function color:
def myColor(r,g,b):
  return Color4f(r/255.0,g/255.0,b/255.0,0.05)

# Function for make columns (re-definded from mapper.py)
def larRod(params):
   radius,height= params
   def larRod0(shape=[36,1]):
      V,CV = larCylinder(params)(shape)
      return V,[range(len(V))]
   return larRod0

# Function checkModel (re-defined without print on shell)
def checkModel(model):
   V,CV = model; n = len(V)
   vertDict = defaultdict(list)
   for k,v in enumerate(V): vertDict[vcode(v)].append(k) 
   verts = (vertDict.values())
   invertedindex = [None]*n
   for k,value in enumerate(verts):
      for i in value:
         invertedindex[i]=value[0]  
   CV = [[invertedindex[v] for v in cell] for cell in CV]
   # filter out degenerate cells
   CV = [list(set(cell)) for cell in CV if len(set(cell))==len(cell)]
   return V, CV
# Function larBall re-defined:
def larBall(radius=1):
    def larBall0(shape=[18,36]):
        V,CV = checkModel(larSphere(radius)(shape))
        return V,[range(len(V))]
    return larBall0

#---------------------------------------------------------------------------------

# Colors:

color = myColor(235,183,78)
colorRuins = myColor(193,130,19)
colorExternal = myColor(127,70,14)
colorHedges = myColor(99,179,29)
colorBench = myColor(112,134,125)
colorBaseLamp = myColor(67,67,67)
colorEndLamp = myColor(245,253,191)
colorTrash = myColor(210,210,210)
colorStreet = myColor(148,96,67)

#-------------------- Horizontal Partition Base ----------------------------------

# Floor0:

# build floor0:

floor0 = rectBase(base_floor0,height_floor0,height_floors)

# translate floor0:

floor0 = STRUCT([T([1,2])([5,5])(floor0)])

# Floor1:

# build floor1:

floor1 = rectBase(base_floor1,height_floor1,2*height_floors)

# translate floor1:

floor1 = STRUCT([T([1,2])([5.5,5.5])(floor1)])

# Floor2:

# build floor2:

floor2 = rectBase(base_floor2,height_floor2,3*height_floors)

# translate floor2:

floor2 = STRUCT([T([1,2])([6,6])(floor2)])

# Floor3:

# build floor3:

floor3 = rectBase(base_floor3,height_floor3,4*height_floors)

# translate floor3:

floor3 = STRUCT([T([1,2])([6.5,6.5])(floor3)])

# Horizontal Partition Base:

horizontal_partition_base = STRUCT([floor0,floor1,floor2,floor3])

#-------------------- Horizontal Partition Middle ----------------------------------

# Internal Walls:

# Floor4:

# build floor4:

floor4 = rectBase(base_floor4,height_floor4,height_internal_walls)

# traslate floor4:

floor4 = STRUCT([T([1,2,3])([16.5,9.5,1.5])(floor4)])

# Floor5:

# build floor5:

floor5 = rectBase(base_floor4,height_floor4,height_internal_walls)

# traslate floor5:

floor5 = STRUCT([T([1,2,3])([9,9.5,1.5])(floor5)])

# Floor6:

# build floor6:

floor6 = rectBase(base_floor6,height_floor6,height_internal_walls)

# traslate floor6:

floor6 = STRUCT([T([1,2,3])([9.4,13,1.5])(floor6)])

# Floor7:

# build floor7:

floor7 = rectBase(base_floor7,height_floor7,height_internal_walls)

# traslate floor7:

floor7 = STRUCT([T([1,2,3])([9.3,36,1.5])(floor7)])

# Floor8:

# build floor8:

floor8 = rectBase(base_floor7,height_floor7,height_internal_walls)

# traslate floor7:

floor8 = STRUCT([T([1,2,3])([14,36,1.5])(floor8)])

# Internal Valls:

internal_walls = STRUCT([floor4,floor5,floor6,floor7,floor8])

# Columns:

# building column:

# cilynder:

cilynder = larRod([cilynder_radius,cilynder_height])([16,1])

cilynder = STRUCT(MKPOLS(cilynder))

# building base capital:

# defining torus:

base_capital = larTorus([torus_a,torus_b])()

base_capital = STRUCT(MKPOLS(base_capital))

# trasling torus:

base_capital = STRUCT([T(3)(6.72)(base_capital)])

# defining end of capital:

end_capital = rectBase(end_capital_base,end_capital_base,end_capital_height)

# trascing end of capital:

end_capital = STRUCT([T([1,2])([-0.5,-0.5])(end_capital)])

end_capital = STRUCT([T(3)(6.8)(end_capital)])

# make column:

column = STRUCT([cilynder,base_capital,end_capital])

# First row of columns:

columns_row_1 = [T(1)(2.4),column]

columns_row_1 = STRUCT(NN(6)(columns_row_1))

columns_1 = STRUCT([T([2,3])([7,1.5]),columns_row_1])

columns_1 = STRUCT([T(1)(5),columns_1])

# Second row of columns:

columns_row_2 = [T(1)(2.4),column]

columns_row_2 = STRUCT(NN(6)(columns_row_2))

columns_2 = STRUCT([T([2,3])([42.5,1.5]),columns_row_2])

columns_2 = STRUCT([T(1)(5),columns_2])

# Third row of columns:

columns_row_3 = [T(2)(3),column]

columns_row_3 = STRUCT(NN(11)(columns_row_3))

columns_3 = STRUCT([T([1,3])([7.4,1.5]),columns_row_3])

columns_3 = STRUCT([T(2)(6.5),columns_3])

# Fourth row of columns:

columns_row_4 = [T(2)(3),column]

columns_row_4 = STRUCT(NN(11)(columns_row_4))

columns_4 = STRUCT([T([1,3])([19.4,1.5]),columns_row_4])

columns_4 = STRUCT([T(2)(6.5),columns_4])

# First internal row of columns:

internal_columns_row_1 = [T(1)(5.3),column]

internal_columns_row_1 = STRUCT(NN(2)(internal_columns_row_1))

internal_columns_1 = STRUCT([T([2,3])([39,1.5]),internal_columns_row_1])

internal_columns_1 = STRUCT([T(1)(5),internal_columns_1])

# Second internal row of columns:

internal_columns_row_2 = [T(1)(5.3),column]

internal_columns_row_2 = STRUCT(NN(2)(internal_columns_row_2))

internal_columns_2 = STRUCT([T([2,3])([10,1.5]),internal_columns_row_2])

internal_columns_2 = STRUCT([T(1)(5),internal_columns_2])

# Horizontal Partition Middle:

horizontal_partition_middle = STRUCT([internal_walls,columns_1,columns_2,columns_3,columns_4,internal_columns_1,internal_columns_2])


#-------------------- Horizontal Partition Coverage ----------------------------------

# Coverage base:

# build coverage base:

coverage_base = rectBase(base_floor3,height_floor3,height_floors)

# trasling coverage base:

coverage_base = STRUCT([T([1,2,3])([6.5,6.5,8.4]),coverage_base])

# Coverage roof:

# build coverage roof:

coverage_roof = Gable(roof_radius,roof_height,roof_n)

# scaling coverage roof:

coverage_roof = S(2)(30.44)(coverage_roof)

# trasling coverage roof:

coverage_roof = STRUCT([T([1,2,3])([6.2,6.45,9]),coverage_roof])

# Horizontal Partition Coverage:

horizontal_partition_coverage = STRUCT([coverage_base,coverage_roof])

#-------------------- All Partition Together ----------------------------------

# Make Building:

building = STRUCT([horizontal_partition_base,horizontal_partition_middle,horizontal_partition_coverage])


#-------------------- Neighborhood ----------------------------------


# Columns in neighborhood:

# Columns:

# Ruins 1:

# building column:

# cilynder:

cilynder = larRod([cilynder_radius,5])([16,1])

cilynder = STRUCT(MKPOLS(cilynder))

# building base capital:

# defining torus:

base_capital = larTorus([torus_a,torus_b])()

base_capital = STRUCT(MKPOLS(base_capital))

# trasling torus:

base_capital = STRUCT([T(3)(5)(base_capital)])

# defining end of capital:

end_capital = rectBase(end_capital_base,end_capital_base,end_capital_height)

# trascing end of capital:

end_capital = STRUCT([T([1,2])([-0.5,-0.5])(end_capital)])

end_capital = STRUCT([T(3)(5.05)(end_capital)])

# make column:

external_column = STRUCT([cilynder,base_capital,end_capital])

external_column = STRUCT([T(3)(0.6)(external_column)])

base_external_column = CUBOID([1,1,0.6])

base_external_column = STRUCT([T([1,2])([-0.5,-0.5])(base_external_column)])

ruin = STRUCT([base_external_column,external_column])

ruin1 = [T(2)(7),ruin]

ruin1 = STRUCT(NN(4)(ruin1))

ruin1 = STRUCT([T(1)(2),ruin1])

# Ruins 2:

ruin2 = [T(2)(5),ruin]

ruin2 = STRUCT(NN(5)(ruin2))

ruin2 = STRUCT([T(1)(24.91),ruin2])

# Ruins 3:

# cilynder1:

cilynder1 = larRod([cilynder_radius,3])([16,1])

cilynder1 = STRUCT(MKPOLS(cilynder1))

external_column1 = STRUCT([cilynder1])

external_column1 = STRUCT([T(3)(0.6)(external_column1)])

base_external_column1 = CUBOID([1,1,0.6])

base_external_column1 = STRUCT([T([1,2])([-0.5,-0.5])(base_external_column1)])

ruin3 = STRUCT([base_external_column1,external_column1])

ruin3 = [T(2)(16),ruin3]

ruin3 = STRUCT(NN(2)(ruin3))

ruin3 = STRUCT([T(1)(2),ruin3])

# Ruins 4:

cube = CUBOID([1,1,0.6])

cube = STRUCT([T([1,2])([-0.5,-0.5])(cube)])

ruin4 = [T(2)(5),cube]

ruin4 = STRUCT(NN(3)(ruin4))

ruin4 = STRUCT([T(1)(34.91),ruin4])

# Ruins:

all_ruins = STRUCT([ruin1,ruin2,ruin3,ruin4])

all_ruins = STRUCT([COLOR(colorRuins)(all_ruins)])

# Building:

building = STRUCT([COLOR(color)(building)])

#-------------------------- External -----------------------------------------

# External plane:

external_base = CUBOID([26.91,49.44,0.1])

external_base = STRUCT([COLOR(colorExternal)(external_base)])

#VIEW(external_base)

# Hedges:

hedge = larBall(1)([18,36])

model_hedge = STRUCT(MKPOLS(hedge))

model_hedge = STRUCT([T([1,2,3])([24.5,12.5,1.1]),model_hedge])

model_hedge_1 = STRUCT(MKPOLS(hedge))

model_hedge_1 = STRUCT([T([1,2,3])([24.5,16.5,1.1]),model_hedge_1])

model_hedge_2 = STRUCT(MKPOLS(hedge))

model_hedge_2 = STRUCT([T([1,2,3])([24.5,20.5,1.1]),model_hedge_2])

model_hedge_3 = STRUCT(MKPOLS(hedge))

model_hedge_3 = STRUCT([T([1,2,3])([24.5,24.5,1.1]),model_hedge_3])

hedges = STRUCT([model_hedge,model_hedge_1,model_hedge_2,model_hedge_3])

hedges = STRUCT([COLOR(colorHedges)(hedges)])

# Bench:

base1 = CUBOID([0.7,3,1.5])
base2 = (T(1)(3.7)(base1))
base = STRUCT([base1,base2])
base = (T(1)(0.3)(base))

seat = CUBOID([5,3,0.5])
seat = (T(3)(1.5)(seat))
bench = STRUCT([base,seat])

bench = (S([1,2,3])([0.5,0.5,0.5])(bench))

bench = (T([1,3])([12,0.1])(bench))

bench = (T(2)([47.44])(bench))

bench = STRUCT([COLOR(colorBench)(bench)])

# Lamps:

# Base lamp:

base_lamp = larRod([0.2,5])([32,1])

model_base_lamp = STRUCT(MKPOLS(base_lamp))

model_base_lamp = COLOR(colorBaseLamp)(model_base_lamp)

end_lamp = larBall(0.5)([18,36])

# End lamp (ligth):

model_end_lamp = STRUCT(MKPOLS(end_lamp))

model_end_lamp = (T(3)(4.7)(model_end_lamp))

model_end_lamp = COLOR(colorEndLamp)(model_end_lamp)

# Lamp 1:

lamp_1 = STRUCT([model_base_lamp,model_end_lamp])

lamp_1 = (T([1,2])([5,48.44])(lamp_1))

# Lamp 2:

lamp_2 = STRUCT([model_base_lamp,model_end_lamp])

lamp_2 = (T([1,2])([22.3,48.44])(lamp_2))

# Lamps:

lamps = STRUCT([lamp_1,lamp_2])

# Trash:

trash = checkModel(larCylinder([.5,1.5])([32,1]))

model_trash = STRUCT(MKPOLS(trash))

model_trash = COLOR(colorTrash)(model_trash)

final_trash = STRUCT([model_trash])

final_trash = (T([1,2])([16,47.44])(final_trash))

# Street :

street = CUBOID([1,49.44,0.05])

street = (T([1,3])([24,0.2])(street))

street = STRUCT([COLOR(colorStreet)(street)])

# External_Ruins:

external_ruins = STRUCT([ruin1])

external_ruins = STRUCT([COLOR(colorRuins)(external_ruins)])

urban_fittings = STRUCT([external_base,hedges,external_ruins,bench,lamps,final_trash,street])

#-------------------------- All in One -----------------------------------------

building = STRUCT([COLOR(color)(building)])

final_building = STRUCT([building,urban_fittings])

VIEW(final_building)

#-------------------------- Finish! -----------------------------------------
