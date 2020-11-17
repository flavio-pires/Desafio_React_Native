USE [Filmes]
GO

/****** Object:  Table [dbo].[Filmes]    Script Date: 16/11/2020 21:21:47 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Filmes](
	[IdFilme] [int] IDENTITY(1,1) NOT NULL,
	[Titulo] [varchar](255) NOT NULL,
	[IdGenero] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdFilme] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[Titulo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Filmes]  WITH CHECK ADD FOREIGN KEY([IdGenero])
REFERENCES [dbo].[Generos] ([IdGenero])
GO
