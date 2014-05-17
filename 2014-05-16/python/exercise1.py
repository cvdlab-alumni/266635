# Exercise 1: Andrea D'Angelo 266635, Homework 3
from pyplasm import *
from scipy import *

import os,sys

# N.B. : PER UNA CORRETTA VISUALIZZAZIONE, SOSTITUIRE IL PATH CORRENTE 
#        CON QUELLO DOVE E' SITUATA LA LIBRERIA lar-cc .

sys.path.insert(0, '/Library/Python/2.7/site-packages/lar-cc/lib/py/')
from lar2psm import *
from simplexn import *
from larcc import *
from largrid import *
from mapper import *
from boolean import *
from sysml import *

DRAW = COMP ([VIEW,STRUCT,MKPOLS])

# Camera 1:

camera_1 = assemblyDiagramInit([3,3,2])([[.3,3.2,.3],[.3,4.4,.3],[.3,2.7]])

V,CV = camera_1

hpc_camera_1 = SKEL_1(STRUCT(MKPOLS(camera_1)))

#VIEW (hpc_camera_1)

#hpc_camera_1 = cellNumbering (camera_1,hpc_camera_1)(range(len(CV)),GREEN,2)

#VIEW (hpc_camera_1)

toRemove = [3,9,15]

camera_1 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

#DRAW (camera_1)

V,CV = camera_1

hpc_camera_1 = (STRUCT(MKPOLS(camera_1)))

#hpc_camera_1 = cellNumbering (camera_1,hpc_camera_1)(range(len(CV)),GREEN,2)

# Finestra

base = CUBOID([.3,4.4,.7])

base = T([2,3])([0.3,0.3])(base)

base_2 = T(3)(2)(base)

base_finestra = STRUCT([base,base_2])

lato = CUBOID([.3,1.7,1.3])

lato = T([2,3])([0.3,1])(lato)

lato_2 = T(2)(2.8)(lato)

lati_finestra = STRUCT([lato,lato_2])

finestra = STRUCT([base_finestra,lati_finestra])

hpc_camera_1 = STRUCT([finestra,hpc_camera_1])

#VIEW (hpc_camera_1)

# Salone:

salone = assemblyDiagramInit([3,3,2])([[.3,3.2,.3],[.3,4.4,.3],[.3,2.7]])

V,CV = salone

hpc_salone = SKEL_1(STRUCT(MKPOLS(salone)))

#VIEW (hpc_salone)

#hpc_salone = cellNumbering (salone,hpc_salone)(range(len(CV)),GREEN,2)

#VIEW (hpc_salone)

toRemove = [3,7,9,11,15]

salone = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

#DRAW (salone)

V,CV = salone

hpc_salone = (STRUCT(MKPOLS(salone)))

#hpc_salone = cellNumbering (salone,hpc_salone)(range(len(CV)),GREEN,2)

# Porta

lato_porta_1 = CUBOID([.3,.3,2.1])

lato_porta_1 = T([2,3])([.3,.3])(lato_porta_1)

lato_porta_2 = CUBOID([.3,2.8,2.1])

lato_porta_2 = T([2,3])([2,.3])(lato_porta_2)

sopra_porta = CUBOID([.3,4.4,.6])

sopra_porta = T([2,3])([.3,2.4])(sopra_porta)

porta = STRUCT([lato_porta_1,lato_porta_2,sopra_porta])

# Porta 2:

lato_porta_2_1 = CUBOID([.3,2.8,2.1])

porta_2 = STRUCT([lato_porta_1,lato_porta_2_1,sopra_porta])

porta_2 = T([1,2])([3.5,-.1])(porta)


# Finestra

base = CUBOID([3.5,.3,.7])

base = T([1,2,3])([0.3,4.7,.3])(base)

base_2 = T(3)(2)(base)

base_finestra = STRUCT([base,base_2])

lato = CUBOID([1,.3,1.3])

lato = T([1,2,3])([.3,4.7,1])(lato)

lato_2 = T(1)(2.3)(lato)

lati_finestra = STRUCT([lato,lato_2])

finestra = STRUCT([base_finestra,lati_finestra])

hpc_salone = STRUCT([finestra,porta,porta_2,hpc_salone])


#VIEW (hpc_salone)

salone_traslato = T(1)(3.5)(hpc_salone)

camera_salone = STRUCT([hpc_camera_1,salone_traslato])

#VIEW(camera_salone)

# Camera 2:

camera_2 = assemblyDiagramInit([3,3,2])([[.3,2.9,.3],[.3,2.9,.3],[.3,2.7]])

V,CV = camera_2

hpc_camera_2 = SKEL_1(STRUCT(MKPOLS(camera_2)))

#hpc_camera_2 = cellNumbering (camera_2,hpc_camera_2)(range(len(CV)),GREEN,2)

#VIEW(hpc_camera_2)

toRemove = [3,7,9]

camera_2 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

#DRAW (camera_2)

V,CV = camera_2

hpc_camera_2 = (STRUCT(MKPOLS(camera_2)))

#hpc_camera_2 = cellNumbering (camera_2,hpc_camera_2)(range(len(CV)),GREEN,2)

#VIEW (hpc_camera_2)

hpc_camera_2 = T([1,2])([7,1.5])(hpc_camera_2)

final = STRUCT([camera_salone,hpc_camera_2])

final = T([1,2])([5,5])(final)

#VIEW (final)

# Closet:

closet = assemblyDiagramInit([3,3,2])([[.3,2.9,.3],[.3,1.2,.3],[.3,2.7]])

V,CV = closet

hpc_closet = SKEL_1(STRUCT(MKPOLS(closet)))

#hpc_closet = cellNumbering (closet,hpc_closet)(range(len(CV)),GREEN,2)

#VIEW (hpc_closet)

toRemove = [3,7,9,11]

closet = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

DRAW (closet)

V,CV = closet

hpc_closet = STRUCT(MKPOLS(closet))

#hpc_closet = cellNumbering (closet,hpc_closet)(range(len(CV)),GREEN,2)

#VIEW (hpc_closet)

hpc_closet = T(1)(7)(hpc_closet)

final = STRUCT([camera_salone,hpc_camera_2,hpc_closet])

final = T([1,2])([10,10])(final)

#VIEW (final)

# ingresso:

ingresso = assemblyDiagramInit([3,3,2])([[.3,1.6,.3],[.3,3.4,.3],[.3,2.7]])

V,CV = ingresso

hpc_ingresso = SKEL_1(STRUCT(MKPOLS(ingresso)))

#VIEW (hpc_ingresso)

#hpc_ingresso = cellNumbering (ingresso,hpc_ingresso)(range(len(CV)),GREEN,2)

#VIEW (hpc_ingresso)

toRemove = [7,9,11,15]

ingresso = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

#VIEW(hpc_ingresso)

DRAW (ingresso)

V,CV = ingresso

hpc_ingresso = STRUCT(MKPOLS(ingresso))

#hpc_ingresso = cellNumbering (ingresso,hpc_ingresso)(range(len(CV)),GREEN,2)

#VIEW (hpc_camera_2)

hpc_ingresso = T([1,2])([3.5,-5.7])(hpc_ingresso)

final = STRUCT([camera_salone,hpc_camera_2,hpc_closet,hpc_ingresso])

final = T([1,2])([10,10])(final)

#VIEW (final)

# corridoio 1:

corridoio = assemblyDiagramInit([3,3,2])([[.3,3.2,.3],[.3,1.7,.3],[.3,2.7]])

V,CV = corridoio

hpc_corridoio = SKEL_1(STRUCT(MKPOLS(corridoio)))

#VIEW (hpc_corridoio)

#hpc_corridoio = cellNumbering (corridoio,hpc_corridoio)(range(len(CV)),GREEN,2)

#VIEW (hpc_corridoio)

toRemove = [7,9,11,15]

corridoio = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

DRAW (corridoio)

V,CV = corridoio

hpc_corridoio = STRUCT(MKPOLS(corridoio))

#hpc_corridoio = cellNumbering (corridoio,hpc_corridoio)(range(len(CV)),GREEN,2)

#VIEW (hpc_camera_2)

hpc_corridoio = T([1,2])([3.5,-2])(hpc_corridoio)

final = STRUCT([camera_salone,hpc_camera_2,hpc_closet,hpc_ingresso,hpc_corridoio])

final = T([1,2])([10,10])(final)

#VIEW (final)

# corridoio 2:

corridoio_2 = assemblyDiagramInit([3,3,2])([[.3,2.9,.3],[.3,1.7,.3],[.3,2.7]])

V,CV = corridoio_2

hpc_corridoio_2 = SKEL_1(STRUCT(MKPOLS(corridoio_2)))

#VIEW (hpc_corridoio_2)

#hpc_corridoio_2 = cellNumbering (corridoio_2,hpc_corridoio_2)(range(len(CV)),GREEN,2)

#VIEW (hpc_corridoio_2)

toRemove = [3,7,9]

corridoio_2 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

DRAW (corridoio_2)

V,CV = corridoio_2

hpc_corridoio_2 = STRUCT(MKPOLS(corridoio_2))

#hpc_corridoio_2 = cellNumbering (corridoio_2,hpc_corridoio_2)(range(len(CV)),GREEN,2)

#VIEW (hpc_camera_2)

hpc_corridoio_2 = T([1,2])([7,-2])(hpc_corridoio_2)

final = STRUCT([camera_salone,hpc_camera_2,hpc_closet,hpc_ingresso,hpc_corridoio,hpc_corridoio_2])

final = T([1,2])([10,10])(final)

#VIEW (final)

# Cucina:

cucina = assemblyDiagramInit([3,3,2])([[.3,2.6,.3],[.3,3.4,.3],[.3,2.7]])

V,CV = cucina

hpc_cucina = SKEL_1(STRUCT(MKPOLS(cucina)))

#VIEW (hpc_cucina)

#hpc_cucina = cellNumbering (cucina,hpc_cucina)(range(len(CV)),GREEN,2)

#VIEW (hpc_cucina)

toRemove = [3,9]

cucina = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

DRAW (cucina)

V,CV = cucina

hpc_cucina = STRUCT(MKPOLS(cucina))

#hpc_cucina = cellNumbering (cucina,hpc_cucina)(range(len(CV)),GREEN,2)

#VIEW (hpc_cucina)

# Porta cucina:

porta_cucina = CUBOID([.3,2.7,2.8])

porta_cucina = T([1,2,3])([0,1,.2])(porta_cucina)

#VIEW(porta_cucina)

hpc_cucina = STRUCT([porta_cucina,hpc_cucina])

hpc_cucina = T([1,2])([5.4,-5.7])(hpc_cucina)



final = STRUCT([camera_salone,hpc_camera_2,hpc_closet,hpc_ingresso,hpc_corridoio,hpc_corridoio_2,hpc_cucina])

final = T([1,2])([10,10])(final)

#VIEW (final)

# bagno:

bagno = assemblyDiagramInit([3,3,2])([[.3,1.6,.3],[.3,3.4,.3],[.3,2.7]])

V,CV = bagno

hpc_bagno = SKEL_1(STRUCT(MKPOLS(bagno)))

#VIEW (hpc_bagno)

#hpc_bagno = cellNumbering (bagno,hpc_bagno)(range(len(CV)),GREEN,2)

#VIEW (hpc_bagno)

toRemove = [9,11]

bagno = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

DRAW (bagno)

V,CV = bagno

hpc_bagno = STRUCT(MKPOLS(bagno))

#hpc_bagno = cellNumbering (bagno,hpc_bagno)(range(len(CV)),GREEN,2)

#VIEW (hpc_camera_2)

hpc_bagno = T([1,2])([8.3,-5.7])(hpc_bagno)

final = STRUCT([camera_salone,hpc_camera_2,hpc_closet,hpc_ingresso,hpc_corridoio,hpc_corridoio_2,hpc_cucina,hpc_bagno])

final = T([1,2])([10,10])(final)

VIEW (final)