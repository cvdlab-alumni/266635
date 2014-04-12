#  Temle of Concordia, Andrea D'Angelo, 266635, exercise1

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
      V,CV = checkModel(larCylinder(params)(shape))
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

#---------------------------------------------------------------------------------

# Color:

color = myColor(235,183,78)

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
"""
cilynder = STRUCT([T([1,2])([2,2])(cilynder)])
base_capital = STRUCT([T([1,2,3])([2,2,1])(base_capital)])
end_capital = STRUCT([T([1,2,3])([2,2,2])(end_capital)])

column = STRUCT([cilynder,base_capital,end_capital])

column = R([1,2])(PI/4)(column)

VIEW(COLOR(color)(column))
"""
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

VIEW(COLOR(color)(building))

#-------------------------- That's All ! -----------------------------------------
